import http from "../http-common";

const get = () => {
  return http.get("/get-admin");
};

export default {
  get,
};
