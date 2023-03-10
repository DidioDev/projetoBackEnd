import { userInfo } from 'os';
import { Database } from './database';
import express from 'express';

const server = express();
const port = 3000;

server.use(express.json());

const database = new Database()

var dados:string[] = [];

server.get("/", (request, response) => {
    const dados = database.select("user")
    response.json(dados)
});

// Parâmetro que esta vindo do CLIENTE - REQUEST
// Parâmetro que esta indo para o CLIENTE - RESPONSE

server.post('/', (request, response) => {
    const { Nome, Email } = request.body
    const user = {
        ID: "1",
        Nome,
        Email,
    };

    database.insert("user", user);
    response.status(201).send();
});


server.listen(port, () => {
    console.log(`Servidor Ligado - URL: http://localhost:${port}`)
});