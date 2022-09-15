import React from "react";

const Comment = ({ body, author, commentId }) => {
  return (
    <div>
      <span>
        {author}: {body}
      </span>
    </div>
  );
};

export default Comment;
