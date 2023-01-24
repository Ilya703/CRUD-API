import http from 'http';
import { v4 as uuidv4 } from 'uuid';

let database = {};

const sendAnswer = ({ res, code, body }) => {
    res.writeHead(code, {
        'Content-type': 'application/json'
    });

    body = typeof body !== 'string' ? JSON.stringify(body) : body;

    res.end(body);
}

const responseFromDatabase = (url) => {
    const answer = {};

    switch (true) {
        case url === '/api/users': 
            answer.body = database;
            answer.code = 200;
            break;
        case url.includes('/api/users/'):
            const userName = url.slice(11);

            if (database[userName]) {
                answer.body = database[userName];
                answer.code = 200;
            } else {
                answer.body = `There is no user with id = ${userName}`;
                answer.code = 404;
            }
            break;
        default:
            answer.body = `Request is incorrect`;
            answer.code = 404;
    }

    return answer;
}

const createNewUser = (url, { username, age, hobbies }) => {
    const answer = {};

    switch (true) {
        case url === '/api/users':
            if (typeof username === 'string' && typeof age === 'number' && typeof Array.isArray(hobbies)) {
                let id = uuidv4();
                database[id] = { username, age, hobbies };
                answer.body = database[id];
                answer.code = 201;
            } else {
                answer.body = 'Request does not contain required fields';
                answer.code = 400;
            }
            break;
        default:
            answer.body = `Request is incorrect`;
            answer.code = 404;
            
    }

    return answer;
}

const putUser = (url, body) => {
    const answer = {};

    switch (true) {
        case url.includes('/api/users/'):
            const userName = url.slice(11);

            if (database[userName]) {
                database[userName] = body; 
                answer.body = database[userName];
                answer.code = 200;
            } else {
                answer.body = `There is no user with id = ${userName}`;
                answer.code = 404;
            }
            break;
        default:
            answer.body = `Request is incorrect`;
            answer.code = 404;
    }

    return answer;
}

const deleteUser = (url) => {
    const answer = {};

    switch (true) {
        case url.includes('/api/users/'):
            const userName = url.slice(11);

            if (database[userName]) {
                database = Object.fromEntries(Object.entries(database).filter(([key, val]) => key !== userName));
                answer.body = 'Success';
                answer.code = 204;
            } else {
                answer.body = `There is no user with id = ${userName}`;
                answer.code = 404;
            }
            break;
        default:
            answer.body = `Request is incorrect`;
            answer.code = 404;
    }

    return answer;
}

const getData = async (req) => {
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
    });

    return body;
}

const server = http.createServer(async (req, res) => {
    const body = await getData(req);

    switch (req.method) {
        case 'GET':
            sendAnswer({ ...responseFromDatabase(req.url), res });
            break;
        case 'POST':
            sendAnswer({ ...createNewUser(req.url, JSON.parse(body)), res });
            break;
        case 'PUT':
            sendAnswer({ ...putUser(req.url, JSON.parse(body)), res });
            break;
        case 'DELETE':
            sendAnswer({ ...deleteUser(req.url), res });
            break;
    }       
});

server.listen(3000);