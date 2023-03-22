const sendAnswer = ({ res, code, body }) => {
    res.writeHead(code, {
        'Content-type': 'application/json'
    });

    body = typeof body !== 'string' ? JSON.stringify(body) : body;

    res.end(body);
};

export default sendAnswer;