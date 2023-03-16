import socketIO from "socket.io-client";

const socket = socketIO.connect("https://chautaroapi.vercel.app");

export default socket;
