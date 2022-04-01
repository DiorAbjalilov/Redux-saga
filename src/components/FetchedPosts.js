import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loading from "./Loading";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchedPost = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);
  if (loading) {
    return <Loading />;
  }
  if (!fetchedPost.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Postlarni Ko'rish
      </button>
    );
  }
  return fetchedPost.map((post) => {
    return (
      <>
        <Post post={post} key={post.id} />
      </>
    );
  });
};

export default FetchedPosts;
