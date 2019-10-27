import axios from "axios";

const direction = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
})
export default direction; 