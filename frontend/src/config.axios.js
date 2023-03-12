import axios from "axios";
const token = localStorage.getItem("cUser_token");

export default axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});
