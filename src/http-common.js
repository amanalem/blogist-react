import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/blogist",
  // xsrfCookieName: "csrftoken",
  // xsrfHeaderName: "X-CSRFTOKEN",
  // withCredentials: true,
});
