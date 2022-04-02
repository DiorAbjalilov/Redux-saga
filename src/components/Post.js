import React from "react";

const Post = ({ post }) => {
  if (!post.userForm) {
    return (
      <>
        <div className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
          </div>
        </div>
      </>
    );
  }
  const { userForm } = post;
  return (
    <>
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">{userForm.first_name}</h5>
          <h6 className="card-title">{userForm.last_name}</h6>
          <p className="card-title">{userForm.title}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
