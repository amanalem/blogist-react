import http from "../http-common";
import axios from "axios";

const baseUrl = "http://localhost:8000/blogist/posts-list/";

const getAll = () => {
  return http.get("/posts-list/");
};

const get = (id) => {
  return http.get(`/posts-list/${id}/`);
};

const create = (form) => {
  return http.post("/posts-list/", form);
  // return axios({
  //   method: "POST",
  //   url: baseUrl,
  //   data: form,
  // });
};

const update = (id, form) => {
  return http.put(`/posts-list/${id}/`, form);
};

const destroy = (id) => {
  return http.delete(`/posts-list/${id}/delete`);
};

export default {
  getAll,
  get,
  create,
  update,
  delete: destroy,
};
