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
  }
`;

const Nav = () => {
  return (
    <NavDiv>
      <ul>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
      </ul>
    </NavDiv>
  );
};

export default Nav;
