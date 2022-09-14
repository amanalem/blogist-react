import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, UseNavigate } from "react-router-dom";
import axios from "axios";
import postsService from "./services/postsService";
import adminService from "./services/adminService";
import Nav from "./components/Nav";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";

function App() {
  const [blogist, setBlogist] = useState({});

  const [user, setUser] = useState({});

  const [posts, setPosts] = useState({});

  useEffect(() => {
    adminService.get().then(({ data }) => {
      setBlogist(data);
    });
  }, []);

  useEffect(() => {
    postsService.getAll().then(({ data }) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>App.js</h1>
      <Nav />
      <Routes>
        <Route path="/blog" element={<PostsPage posts={posts} />} />
        <Route path="/admin" element={<AdminPage blogist={blogist} />} />
        <Route path="/*" element={<Navigate to="/blog" />} />
      </Routes>
    </div>
  );
}

export default App;
