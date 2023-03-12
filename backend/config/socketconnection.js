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
    });
    socket.on("talk-start", (data) => {
        // console.log(data);
        socket.join(data);
    });
    socket.on("new message", (data) => {
        console.log(data.id);

        socket.broadcast.to(data.id).emit("recieved message", data.message);
    });
});

module.exports = { http, socketIO };
