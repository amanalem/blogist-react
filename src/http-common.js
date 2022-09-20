import axios from "axios";

export default axios.create({
  baseURL: "https://blogist-backend.herokuapp.com/blogist/",
  // xsrfCookieName: "csrftoken",
  // xsrfHeaderName: "X-CSRFTOKEN",
  // withCredentials: true,
});
