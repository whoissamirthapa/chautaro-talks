const dotenv = require("dotenv");
const { http } = require("./config/socketconnection");
dotenv.config();

http.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
