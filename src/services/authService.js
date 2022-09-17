import http from "../http-common";
import tokenService from "./tokenService";

const login = (creds) => {
  return http.post("/login/", creds);
  // .then(({ data }) => {
  // tokenService.setToken(data.token);
  // });
};

const register = (creds) => {
  return http.post("/register/", creds);
};

// const getUser = () => {
//   return tokenService.getUserFromToken();
// };

// const logout = () => {
//   return tokenService.removeToken();
// };

export default {
  login,
  register,
  // getUser,
  // logout,
};
