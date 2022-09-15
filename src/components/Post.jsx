import React, { useState, useEffect } from "react";
import commentService from "../services/commentService";
import Comment from "./Comment";

const Post = ({ title, media, id, body, alt }) => {
  useEffect(() => {
    commentService.get(id).then(({ data }) => {
      setComments(data);
    });
  }, []);

  const [comments, setComments] = useState([]);

  return (
    <div>
      <img src={media} alt={alt} />
      <h3>{title}</h3>
      <p>{body}</p>
      {comments.length ? <h3>Comments</h3> : null}
      {comments.length ? comments.map((comment) => []) : null}

      <hr />
    </div>
  );
};

export default Post;
