import { v4 as uuidv4 } from 'uuid';

const processPOSTRequest = (url, { username, age, hobbies }, database) => {
    const answer = {};

    switch (true) {
        case url === '/api/create-user':
            if (username && age && hobbies) {
                let id = uuidv4();
                database[id] = { username, age, hobbies };
                answer.body = { ...database[id], id };
                answer.code = 200;
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
};

export default processPOSTRequest;