import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const Nav = () => {
  return (
    <NavDiv>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        &nbsp; &nbsp; &nbsp;
        <li>
          <Link to="/about">About</Link>
        </li>
        &nbsp; &nbsp; &nbsp;
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        &nbsp; &nbsp; &nbsp;
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        &nbsp; &nbsp; &nbsp;
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </NavDiv>
  );
};

export default Nav;
