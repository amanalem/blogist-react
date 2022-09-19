import React from "react";
import Post from "../components/Post";

const PostsPage = ({ posts, user }) => {
  return (
    <div>
      <div>
        <br />
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              media={post.media}
              id={post.id}
              body={post.body}
              alt={post.media_alt}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
