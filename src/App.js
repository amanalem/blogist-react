import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    console.log("posts useEffect ran!");
    fetch("http://localhost:8000/blogist/posts-list/")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        return res;
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <h1>Post List</h1>
    </div>
  );
}

export default App;
