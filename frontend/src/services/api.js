import axios from "axios";

const api = axios.create({
    baseURL: "http://ecoliza.tk:3333",
})
export default api; 