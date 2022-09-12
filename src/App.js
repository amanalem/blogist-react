import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, UseNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import AdminPage from "./pages/AdminPage";

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/blogist/posts-list/").then(({ data }) => {
      setPosts(data).then(() => console.log("posts useEffect ran!"));
    });
  }, []);

  return (
    <div className="App">
      <h1>App.js</h1>
      <Nav />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
