import express from 'express';

const server = express()
const port = 3000

server.get("/", (request, response) => {
    response.send('Hello World!')
});

server.listen(port, () => {
    console.log("Server Running!! 🎲");
    
});