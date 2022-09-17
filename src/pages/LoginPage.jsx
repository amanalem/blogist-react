import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = ({ user, setUser }) => {
  const [selector, setSelector] = useState({
    toggle: true,
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const toggle = () => {
    setSelector({ toggle: !selector.toggle });
  };

  const updateMessage = () => [];

  //   let toggle = true;

  return (
    <div>
      {selector.toggle ? (
        <Login toggle={toggle} user={user} setUser={setUser} />
      ) : (
        <Register toggle={toggle} user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default LoginPage;
