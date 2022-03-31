import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title here {post}</h5>
        </div>
      </div>
    </>
  );
};

export default Post;
