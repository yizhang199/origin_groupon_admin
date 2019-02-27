import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8000/api`
});

export const baseUrl = "http://localhost/groupon_api/public";
