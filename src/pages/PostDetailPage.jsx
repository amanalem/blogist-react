import React, { useState, useEffect } from "react";
import commentService from "../services/commentService";
import Comment from "../components/Comment";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import postsService from "../services/postsService";

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

const PostDetail = styled.div`
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

const PostDetailPage = ({ user }) => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    postsService.get(id).then(({ data }) => {
      setPost(data);
    });
  });

  useEffect(() => {
    commentService.get(id).then(({ data }) => {
      setComments(data);
    });
  }, []);

  return (
    <PostDetail>
      <br />
      <img src={post.media} alt={post.alt} />
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {user.id ? <button>Comment</button> : null}

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
                    user={user}
                  />
                </li>
              );
            })}
          </ul>
        </CommentList>
      ) : null}

      <hr />
    </PostDetail>
  );
};

export default PostDetailPage;
