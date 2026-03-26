import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-bebf.up.railway.app/api"
});

export default API;
