import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true
	},
	transports: ['websocket', 'polling']
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {

	socket.on('newPlayer', (data) => {
		socket.join(data.room)
		io.to(data.room).emit("newPlayer", {height: data, id: socket.id})
	})

	socket.on('currentPlayer', (data) => {
		console.log(data)
		io.to(data.room).emit("currentPlayer", {height: data, id: socket.id})
	})

	console.log('a user connected');

	socket.on('disconnecting', () => {
		io.emit('user-disconnected', socket.id);
	});

	socket.on('message', (message) => {
		console.log("Message: ", message);

		socket.emit("message", "Reply");
	})
	socket.on('playerData', (data) => {
		io.to(data.room).emit("newPlayerData", {data: data, id: socket.id})
	})

});


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});