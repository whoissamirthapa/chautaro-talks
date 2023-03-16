const mongoose = require("mongoose");

const connnectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((con) => {
            console.log(`Mongodb Database connected`);
        });
};

module.exports = connnectDatabase;
