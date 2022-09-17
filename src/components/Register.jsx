import React, { useState } from "react";

const Register = ({ user, setUser, toggle, updateMessage }) => {
  const [registerForm, setRegisterForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_superuser: true,
  });

  const handleRegister = (e) => {};

  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          size={45}
          value={registerForm.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="text"
          name="first_name"
          size={20}
          value={registerForm.first_name}
          onChange={handleChange}
          placeholder="first name"
        />
        &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="last_name"
          size={20}
          value={registerForm.last_name}
          onChange={handleChange}
          placeholder="last name"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          size={45}
          value={registerForm.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <br />
        <input
          type="password"
          name="password_confirmation"
          size={45}
          value={registerForm.password_confirmation}
          onChange={handleChange}
          placeholder="confirm password"
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <br /> <br />
      <br />
      <span>
        Already have an account? <button onClick={toggle}>Log In</button>
      </span>
    </div>
  );
};

export default Register;
