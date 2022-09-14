import React from "react";
import { useState, useEffect } from "react";
import postsService from "../services/postsService";
import adminService from "../services/adminService";

const NewPostForm = ({ blogist, setBlogist, setPosts, posts }) => {
  useEffect(() => {
    adminService.get().then(({ data }) => {
      console.log(data.id);
      setFormData({ media: "", title: "", body: "", author: data.id });
    });
  }, []);

  const initialState = {
    media: "",
    title: "",
    body: "",
    author: blogist.id,
  };

  const [formData, setFormData] = useState(initialState);

  const [message, setMessage] = useState({ message: "" });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      postsService.create(formData).then(({ data }) => {
        setFormData(initialState);
        setPosts([...posts, data]);
      });
    } catch (err) {
      updateMessage(err.message);
      setFormData(initialState);
    }
  };

  const isFromInvalid = () => {
    return !(formData.media || formData.title || formData.body);
  };

  return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="media"
          name="media"
          value={formData.media}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Post Body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <br />
        <button disabled={isFromInvalid()}>Create Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
