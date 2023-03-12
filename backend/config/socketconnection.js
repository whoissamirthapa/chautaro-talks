const app = require("../src/app");
const http = require("http").Server(app);

const socketIO = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

socketIO.on("connection", (socket) => {
    console.log("User connected");
    socket.on("talk-start", (data) => {
        console.log(data);
    });
});

module.exports = { http, socketIO };
