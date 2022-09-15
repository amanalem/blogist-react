import React, { useState, useEffect } from "react";
import replyService from "../services/replyService";
import Reply from "./Reply";

const Comment = ({ body, author, commentId, postId }) => {
  useEffect(() => {
    replyService.get(commentId).then(({ data }) => {
      setReplies(data);
    });
  }, []);

  const [replies, setReplies] = useState([]);

  return (
    <div>
      <h3>Comment</h3>
      <span>
        {author}: {body}
      </span>
      {replies.length ? <h4>Replies</h4> : null}
      {replies.length ? (
        <ul>
          {replies.map((reply) => {
            return (
              <li>
                <Reply key={reply.id} author={reply.author} body={reply.body} />
              </li>
            );
          })}
        </ul>
      ) : null}
      <br />
    </div>
  );
};

export default Comment;
