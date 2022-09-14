import React from "react";
import NewPostForm from "../components/NewPostForm";
import PostAdmin from "../components/PostAdmin";
import styled from "styled-components";

const PostItem = styled.div`
  table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1vh;
  }
`;

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
      <PostItem>
        <table>
          {posts.map((post) => {
            return (
              <tr>
                <PostAdmin
                  key={post.id}
                  title={post.title}
                  id={post.id}
                  posts={posts}
                  setPosts={setPosts}
                />
              </tr>
            );
          })}
        </table>
      </PostItem>
    </div>
  );
};

export default AdminPage;
