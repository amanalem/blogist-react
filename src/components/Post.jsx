import React, { useState, useEffect } from "react";
import commentService from "../services/commentService";
import Comment from "./Comment";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CommentList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const Post = ({ title, media, id, body, alt, user }) => {
  return (
    <div>
      <a
        href={`/post/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={media} alt={alt} />
        <h3>{title}</h3>
        <p>{body}</p>
      </a>

      <hr />
    </div>
  );
};

export default Post;
