import socketIO from "socket.io-client";

// const socket = socketIO.connect("http://localhost:4000");
const socket = socketIO.connect("https://chautaroapi.onrender.com");

export default socket;
