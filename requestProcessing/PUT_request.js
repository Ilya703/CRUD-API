const processPUTRequest = (url, body, database) => {
    const answer = {};

    switch (true) {
        case url.includes('/api/replace-user/'):
            const userName = url.slice(18);

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
};

export default processPUTRequest;