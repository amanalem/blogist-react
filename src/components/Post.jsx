import React, { useState, useEffect } from "react";
import commentService from "../services/commentService";
import Comment from "./Comment";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostImg = styled.div`
  img {
    max-width: 70%;
  }

  p {
    max-width: 70%;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
`;

const Post = ({ title, media, id, body, alt, user }) => {
  return (
    <PostImg>
      <a
        href={`/post/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={media} alt={alt} />
        <h3>{title}</h3>
        <p>{body}</p>
      </a>

      <hr />
    </PostImg>
  );
};

export default Post;
