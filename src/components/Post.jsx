import React, { useState, useEffect } from "react";
import commentService from "../services/commentService";
import Comment from "./Comment";
import styled from "styled-components";

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
      {comments.length ? (
        <CommentList>
          <ul>
            {comments.map((comment) => {
              return (
                <li>
                  <Comment
                    key={comment.id}
                    commentId={comment.id}
                    body={comment.body}
                    author={comment.author}
                  />
                </li>
              );
            })}
          </ul>
        </CommentList>
      ) : null}

      <hr />
    </div>
  );
};

export default Post;
