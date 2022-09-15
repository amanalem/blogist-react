import React from "react";

const Reply = ({ body, author }) => {
  return (
    <div>
      <span>
        {author}: {body}
      </span>
    </div>
  );
};

export default Reply;
