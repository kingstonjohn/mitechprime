import { io } from "socket.io-client";
import { baseSocketUrl } from "./services/request";

let socket;

const connectSocket = (_id) => {
  socket = io(baseSocketUrl, {
    query: { _id },
    transports: ['websocket']
  });
} 

export {socket, connectSocket};