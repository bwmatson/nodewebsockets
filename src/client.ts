// Connect to server
import * as io from 'socket.io-client';
const socket = io.connect('http://localhost:8080');

// Add a connect listener
socket.on('connect', () => {
  console.log('Connected!');
  socket.emit('message', 'hello server this is the client');
});
