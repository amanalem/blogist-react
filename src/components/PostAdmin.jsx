import React from "react";
import { Link } from "react-router-dom";
import postsService from "../services/postsService";

const PostAdmin = ({ title, id, posts, setPosts }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    try {
      postsService.delete(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <td>{title}</td>
      <td>
        <Link to={`/edit-post/${id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </div>
  );
};

export default PostAdmin;
