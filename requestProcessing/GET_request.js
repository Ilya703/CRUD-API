const processGETRequest = (url, database) => {
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
};

export default processGETRequest;