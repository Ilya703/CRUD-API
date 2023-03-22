import http from 'http';
import dotenv from 'dotenv';

import sendAnswer from './requestProcessing/sendAnswer.js';
import getData from './requestProcessing/getData.js';
import processGETRequest from './requestProcessing/GET_request.js';
import processPOSTRequest from './requestProcessing/POST_request.js';
import processPUTRequest from './requestProcessing/PUT_request.js';
import processDELETERequest from './requestProcessing/DELETE_request.js';

dotenv.config({ path: './env/.env' });

let database = {};
const PORT = +process.env.PORT || 3001; 

const server = http.createServer(async (req, res) => {
    const body = await getData(req);

    switch (req.method) {
        case 'GET':
            sendAnswer({ ...processGETRequest(req.url, database), res });
            break;
        case 'POST':
            sendAnswer({ ...processPOSTRequest(req.url, JSON.parse(body), database), res });
            break;
        case 'PUT':
            sendAnswer({ ...processPUTRequest(req.url, JSON.parse(body), database), res });
            break;
        case 'DELETE':
            sendAnswer({ ...processDELETERequest(req.url, database), res });
            break;
    }       
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));