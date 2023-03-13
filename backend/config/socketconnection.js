const app = require("../src/app");
const http = require("http").Server(app);

const socketIO = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

socketIO.on("connection", (socket) => {
    console.log("socket.io connected");
    socket.on("setup", (data) => {
        // console.log(data);
        socket.join(data?._id);
        socket.emit("user connected", data?._id);
        console.log("user connected", data?._id);
    });
    socket.on("talk-start", (data) => {
        // console.log(data);
        socket.join(data?.id);
    });
    socket.on("new message", (data) => {
        // console.log(data.message);
        // console.log(data.id);
        socket.in(data.id).emit("recieved message", data.message);
    });
    socket.off("setup", (data) => {
        console.log("user disconnected");
        socket.leave(data?._id);
    });
});

module.exports = { http, socketIO };
