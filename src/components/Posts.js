import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  if (!posts.length) {
    return <p>Post hozircha yo'q</p>;
  }
  return posts.map((post) => {
    return (
      <>
        <Post post={post} key={post} />
      </>
    );
  });
};

export default Posts;
