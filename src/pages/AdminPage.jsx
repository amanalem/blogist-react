import React from "react";
import NewPostForm from "../components/NewPostForm";
import PostAdmin from "../components/PostAdmin";

const AdminPage = ({ blogist, setBlogist, setPosts, posts }) => {
  return (
    <div>
      <h2>AdminPage</h2>
      <NewPostForm
        blogist={blogist}
        setBlogist={setBlogist}
        setPosts={setPosts}
        posts={posts}
      />
      <br />
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <PostAdmin key={post.id} title={post.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminPage;
