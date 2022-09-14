import React from "react";
import { Link } from "react-router-dom";
import postsService from "../services/postsService";

const PostAdmin = ({ title, id, posts, setPosts }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    try {
      postsService.delete(id).then(() => {
        postsService.get().then(({ data }) => {
          setPosts(data);
        });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <td>{title}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </div>
  );
};

export default PostAdmin;
