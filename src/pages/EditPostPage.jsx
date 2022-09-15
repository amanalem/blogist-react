import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import postsService from "../services/postsService";

const EditPostPage = ({ setPosts }) => {
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
        <label>
          Media <br />
          <input
            onChange={handleChange}
            type="text"
            name="media"
            value={formData.media}
          />
        </label>
        <br />
        <br />
        <label>
          Media Alt-Text <br />
          <input
            onChange={handleChange}
            type="text"
            name="media_alt"
            value={formData.media_alt}
          />
        </label>
        <br />
        <br />
        <label>
          Title <br />
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
          />
        </label>
        <br />
        <br />
        <label>
          Post Body <br />
          <input
            onChange={handleChange}
            type="text"
            name="body"
            value={formData.body}
          />
        </label>
        <br />
        <br />
        <button type="submit">Save</button>
        <br />
        <br />
      </form>
      <Link to="/admin">
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default EditPostPage;
