import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const syncPosts = useSelector((state) => state.posts.posts);
  // console.log(syncPosts);
  if (!syncPosts.length) {
    return <p>Post hozircha yo'q</p>;
  }
  return syncPosts.map((post) => {
    return (
      <>
        <Post post={post} key={post} />
      </>
    );
  });
};

export default Posts;
