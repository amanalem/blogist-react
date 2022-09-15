import React from "react";
import Post from "../components/Post";

const PostsPage = ({ posts }) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              media={post.media}
              id={post.id}
              body={post.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
