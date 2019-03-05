import axios from "axios";

export default axios.create({
  // baseURL: `http://kidsnparty.com.au/roben_api/groupon/public/api`,
  baseURL: `http://localhost/groupon_api/public/api`
});

export const baseUrl = "http://kidsnparty.com.au/roben_api/groupon/public";
