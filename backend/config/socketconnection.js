const app = require("../src/app");
const http = require("http").Server(app);

const socketIO = require("socket.io")(http, {
    pingTimeout: 60000,
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

socketIO.on("connection", (socket) => {
    console.log("socket.io connected");

    socket.on("setup", (data) => {
        socket.emit("user connected", data?._id);
        console.log("user connected", data?._id);
    });
    socket.on("talk-start", (data) => {
        socket.join(data?.id);
        console.log("talk started at", data?.id);
    });

    socket.on("new message", (data) => {
        // console.log("new message", data);
        socket.to(data?.id).emit("recieved message", data.message);
    });
    socket.off("setup", (data) => {
        console.log("user disconnected");
        socket.leave(data?._id);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

module.exports = { http, socketIO };
