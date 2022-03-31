import { CREATE_POST, FETCH_POSTS } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    const respons = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await respons.json();
    dispatch({ type: FETCH_POSTS, payload: json });
  };
}
