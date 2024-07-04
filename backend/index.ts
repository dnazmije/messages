
import Express from 'express';
import { JsonDB, Config } from 'node-json-db';
import OpenAPIBackend from 'openapi-backend';
import type { Context, Request } from 'openapi-backend';
import Messages from './routes/messages';
import cors from 'cors'

const app = Express();
app.use(Express.json());
app.use(cors());
const port = process.env.PORT || 3000;

// definition of the OpenApi backend
const api = new OpenAPIBackend({
    definition: './../docs/openapi.yaml'
});

// database connection
const db = new JsonDB(new Config('messages', true, false, '/'));

// registation of all routes
api.register( {
    getMessages: Messages.getMessagesFromDB,
    postMessage: Messages.postMessageToDB,
    validationFail: Messages.validationFail,
    notFound: Messages.notFound,
});

// init the app
api.init();
app.use((req, res) =>  {
    api.handleRequest(req as Request, req, res);
});

// listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/messages`);
});