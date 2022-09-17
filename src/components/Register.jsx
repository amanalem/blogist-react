import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = ({
  user,
  setUser,
  toggle,
  updateMessage,
  handleLoginOrRegister,
}) => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_superuser: false,
  });

  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(registerForm);
      toggle();
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(
      registerForm.email &&
      registerForm.username &&
      registerForm.password &&
      registerForm.password_confirmation
    );
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
          name="username"
          size={45}
          value={registerForm.username}
          onChange={handleChange}
          placeholder="username"
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
        <button type="submit" disabled={isFormInvalid()}>
          Register
        </button>
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
