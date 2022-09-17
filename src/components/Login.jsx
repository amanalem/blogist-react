import React, { useState } from "react";
import authService from "../services/authService";

const Login = ({ user, setUser, toggle, updateMessage }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authService.login(loginForm).then(({ data }) => {
      updateMessage(data.message);
      if (data.token) {
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          size={45}
          type="email"
          name="email"
          onChange={handleChange}
          value={loginForm.email}
          placeholder="email"
        />

        <br />
        <br />

        <input
          size={45}
          type="password"
          name="password"
          onChange={handleChange}
          value={loginForm.password}
          placeholder="password"
        />

        <br />
        <br />
        <button type="submit">Log In</button>
      </form>
      <br />
      <br /> <br />
      <span>
        Don't have an account? <button onClick={toggle}>Register</button>
      </span>
    </div>
  );
};

export default Login;
