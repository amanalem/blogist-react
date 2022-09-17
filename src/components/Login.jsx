import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = ({
  user,
  setUser,
  toggle,
  updateMessage,
  handleLoginOrRegister,
}) => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      authService.login(loginForm).then(({ user }) => {
        setUser(user);
        navigate("/blog");
      });
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(loginForm.email && loginForm.password);
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
        <input
          size={45}
          type="password"
          name="password_confirmation"
          onChange={handleChange}
          value={loginForm.password_confirmation}
          placeholder="password_confirmation"
        />

        <br />
        <br />
        <button type="submit" disabled={isFormInvalid()}>
          Log In
        </button>
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
