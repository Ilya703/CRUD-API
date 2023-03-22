const getData = async (req) => {
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
    });

    return body;
};

export default getData;