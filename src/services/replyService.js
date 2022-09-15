import http from "../http-common";

const get = (commentId) => {
  return http.get(`/replies-list/${commentId}`);
};

const create = (commentId, form) => {
  return http.post(`/replies-list/`, form);
};

const destroy = (commentId, replyId) => {
  return http.delete(`/replies-list/${commentId}/detail/${replyId}/`);
};

export default {
  get,
  create,
  delete: destroy,
};
