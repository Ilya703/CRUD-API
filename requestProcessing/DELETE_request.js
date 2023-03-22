const processDELETERequest = (url, database) => {
    const answer = {};

    switch (true) {
        case url.includes('/api/delete-user/'):
            const userName = url.slice(17);

            if (database[userName]) {
                database = Object.fromEntries(Object.entries(database).filter(([key, val]) => key !== userName));
                console.log(database);
                answer.body = 'Success';
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

export default processDELETERequest;