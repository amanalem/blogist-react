import http from "../http-common";

const getAll = () => {
  return http.get("/posts-list");
};

const get = (id) => {
  return http.get(`/posts-list/${id}`);
};

const create = (form) => {
  return http.post("/posts-list", form);
};

const update = (id, form) => {
  return http.put(`/posts-list/${id}`, form);
};

const destroy = (id) => {
  return http.delete(`/posts-list/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  delete: destroy,
};
