import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import postsService from "../services/postsService";

const EditPostPage = ({ posts, setPosts }) => {
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    postsService.get(id).then(({ data }) => {
      setFormData(data);
    });
  }, []);

  const [formData, setFormData] = useState({});

  const handleEdit = (e) => {
    e.preventDefault();
    postsService.update(id, formData).then(() => {
      postsService.getAll().then(({ data }) => {
        setPosts(data);
        navigate("/admin");
      });
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleEdit}>
        <input
          onChange={handleChange}
          type="text"
          name="media"
          value={formData.media}
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={formData.title}
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="body"
          value={formData.body}
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <Link to="/admin">
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default EditPostPage;
