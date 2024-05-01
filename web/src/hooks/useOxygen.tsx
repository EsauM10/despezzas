import { io } from 'socket.io-client';

const URL = `http://localhost:15999`;
const socket = io(URL);

window.addEventListener('beforeunload', () => socket.emit('onclose'))


export { socket }