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

	socket.on('newPlayer', (height) => {
		socket.broadcast.emit("newPlayer", {height: height, id: socket.id})
	})

	console.log('a user connected');

	socket.on('disconnect', () => {
	  console.log('user disconnected');
	});

	socket.on('message', (message) => {
		console.log("Message: ", message);

		socket.emit("message", "Reply");
	})
	socket.on('playerData', (data) => {
		socket.broadcast.emit("newPlayerData", {data: data, id: socket.id})
	})

});


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});