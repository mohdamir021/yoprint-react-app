import axios from "axios";

export const jikanAPI = axios.create({
  baseURL: "https://api.jikan.moe/v4"
});



export default jikanAPI;