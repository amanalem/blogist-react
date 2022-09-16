import http from "../http-common";

const get = () => {
  return http.get("/style/");
};

const create = () => {
  return http.post("/style/");
};

const update = () => {
  return http.put("/style/");
};

export default {
  get,
  create,
  update,
};
