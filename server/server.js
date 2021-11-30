const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('text', (data) => {
        console.log(data.text);
        io.emit('text', data);
    });
});

http.listen(8080, () => {
    console.log('listening on port 8080');
})