import http from "../http-common";

const get = (id, commentId) => {
  return http.get(`posts-list/${id}/comments/${commentId}/replies/`);
};

const create = (id, commentId, form) => {
  return http.post(`posts-list/${id}/comments/${commentId}/replies/`, form);
};

const destroy = (id, commentId, replyId) => {
  return http.delete(
    `posts-list/${id}/comments/${commentId}/replies/${replyId}/`
  );
};

export default {
  get,
  create,
  delete: destroy,
};
