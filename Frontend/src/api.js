import axios from "axios";

const api = axios.create({
  baseURL:"https://ai-chat-assistant-spx4.onrender.com",
  withCredentials: true,
});

export default api;