import React from "react";

const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Postlarni Ko'rish</button>;
  }
  return <div>FetchedPosts</div>;
};

export default FetchedPosts;
