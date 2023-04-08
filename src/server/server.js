const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const porta = 3000;
let messages = [];
let users = [];
io.on("connection", socket => {
    console.log("Usuário conectado");


    socket.on('disconnect', () => {  
        console.log('Usuário desconectado com o ID: ' + socket.id); 
    });

    socket.on("message", (data) => {
      
        console.log(`Mensagem enviada por ${socket.id}: ${data}`);
        io.emit("message", data);
        
    });

}


);

server.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta);
});