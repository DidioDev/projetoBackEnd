import { Database } from './database';
import express from 'express';

const server = express();
const port = 3000;

server.use(express.json());

const database = new Database()

var dados:string[] = [];

server.get("/", (request, response) => {
    response.json(dados);
});

server.post('/', (request, response) => {
    const { Nome } = request.body

    const user = {
        ID: "1",
        Nome,
        Email,
    }

    response.status(201).send();
});

server.listen(port, () => {
    console.log(`Servidor Ligado - URL: http://localhost:${port}`)
});