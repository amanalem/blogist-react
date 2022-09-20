import axios from "axios";

export default axios.create({
  baseURL: "https://blogist-backend.herokuapp.com/",
  // xsrfCookieName: "csrftoken",
  // xsrfHeaderName: "X-CSRFTOKEN",
  // withCredentials: true,
});
