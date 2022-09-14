import React from "react";
import NewPostForm from "../components/NewPostForm";

const AdminPage = ({ blogist }) => {
  return (
    <div>
      <h2>AdminPage</h2>
      <NewPostForm id={blogist.id} />
    </div>
  );
};

export default AdminPage;
