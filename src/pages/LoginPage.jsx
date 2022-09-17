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
        />
      ) : (
        <Register
          toggle={toggle}
          user={user}
          setUser={setUser}
          updateMessage={updateMessage}
        />
      )}
    </div>
  );
};

export default LoginPage;
