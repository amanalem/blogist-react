import React from "react";

const Post = ({ title, media, id, body, alt }) => {
  return (
    <div>
      <img src={media} alt={alt} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
