import axios from "axios";
const token = localStorage.getItem("cUser_token");

export default axios.create({
    baseURL: "https://chautaroapi.vercel.app",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});
