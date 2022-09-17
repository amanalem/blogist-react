import React, { useState } from "react";

const Login = ({ user, setUser, toggle }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {};

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
