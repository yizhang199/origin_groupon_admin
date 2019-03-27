import axios from "axios";

export default axios.create({
  baseURL: `http://guoli.com.au/beautifulfruit/public/api`
  // baseURL: `http://localhost/groupon_api/public/api`
  // baseURL: `http://localhost:8000/api`
});

export const baseUrl = "http://guoli.com.au/beautifulfruit/public/";
