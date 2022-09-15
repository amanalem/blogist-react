import http from "../http-common";

const get = (id) => {
  return http.get(`/comments-list/`);
};

const create = (form) => {
  return http.post("/comments-list/", form);
};

const destroy = (id) => {
  return http.delete(`/comments-list/${id}/`);
};

export default {
  get,
  create,
  delete: destroy,
};
