import axios from "axios";
import React from "react";
import { useState } from "react";

const NewPostForm = ({ id }) => {
  const initialState = {
    media: "",
    title: "",
    body: "",
    author: id,
  };

  const [formData, setFormData] = useState(initialState);

  const [message, setMessage] = useState({ message: "" });

  const createPost = (post) => {
    axios.create("http://localhost:8000/blogist/posts-list/", post);
  };

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createPost(formData);
      setFormData(initialState);
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
