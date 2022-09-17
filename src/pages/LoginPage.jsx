import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = ({ user, setUser, handleLoginOrRegister }) => {
  const [selector, setSelector] = useState({
    toggle: true,
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const toggle = () => {
    setSelector({ toggle: !selector.toggle });
  };

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  //   let toggle = true;

  return (
    <div>
      {selector.toggle ? (
        <Login
          toggle={toggle}
          user={user}
          setUser={setUser}
          updateMessage={updateMessage}
          handleLoginOrRegister={handleLoginOrRegister}
        />
      ) : (
        <Register
          toggle={toggle}
          user={user}
          setUser={setUser}
          updateMessage={updateMessage}
          handleLoginOrRegister={handleLoginOrRegister}
        />
      )}
    </div>
  );
};

export default LoginPage;
