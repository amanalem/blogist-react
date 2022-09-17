import "./App.css";
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  UseNavigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import postsService from "./services/postsService";
import adminService from "./services/adminService";
import styleService from "./services/styleService";
import authService from "./services/authService";
import Nav from "./components/Nav";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";
import EditPostPage from "./pages/EditPostPage";
import PostDetailPage from "./pages/PostDetailPage";

import LoginPage from "./pages/LoginPage";

function App() {
  const navigate = useNavigate();

  const [blogist, setBlogist] = useState({});

  const [user, setUser] = useState({});

  const [posts, setPosts] = useState([]);

  const [style, setStyle] = useState({});

  const handleLogout = () => {
    // authService.logout();
    setUser(null);
    navigate("/login");
  };

  const handleLoginOrRegister = () => {
    setUser(authService.getUser());
  };

  // const handleLogin = () => {
  //   setUser(authService.login);
  // };

  // const handleRegister = () => {};

  useEffect(() => {
    adminService.get().then(({ data }) => {
      setBlogist(data);
    });
  }, []);

  // useEffect(() => {
  //   setUser(authService.getUser());
  // }, []);

  useEffect(() => {
    postsService.getAll().then(({ data }) => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    styleService.get().then(({ data }) => {
      setStyle(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Blogist</h1>
      <Nav user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/blog" element={<PostsPage posts={posts} user={user} />} />
        <Route
          path="/login"
          element={
            <LoginPage
              user={user}
              setUser={setUser}
              handleLoginOrRegister={handleLoginOrRegister}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPage
              blogist={blogist}
              setBlogist={setBlogist}
              setPosts={setPosts}
              posts={posts}
              style={style}
              setStyle={setStyle}
            />
          }
        />
        <Route
          path="/edit-post/:id"
          element={<EditPostPage setPosts={setPosts} />}
        />
        <Route path="/post/:id" element={<PostDetailPage user={user} />} />
        <Route path="/*" element={<Navigate to="/blog" />} />
      </Routes>
    </div>
  );
}

export default App;
