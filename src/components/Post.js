import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <div className="card mt-2" key={post.id}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
        </div>
      </div>
    </>
  );
};

export default Post;
