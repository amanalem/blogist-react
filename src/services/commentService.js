import http from "../http-common";

const get = (id) => {
  return http.get(`posts-list/${id}/comments/`);
};

const create = (id, form) => {
  return http.post(`posts-list/${id}/comments/`, form);
};

const destroy = (id, commentId) => {
  return http.delete(`posts-list/${id}/comments/${commentId}/`);
};

export default {
  get,
  create,
  delete: destroy,
};
