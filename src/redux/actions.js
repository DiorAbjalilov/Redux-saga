import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

// export function fetchPosts() {
//   return async (dispatch) => {
//     try {
//       dispatch(showLoader());
//       const respons = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const json = await respons.json();
//       setTimeout(() => {
//         dispatch({ type: FETCH_POSTS, payload: json });
//         dispatch(hideLoader());
//       }, 500);
//     } catch (err) {
//       dispatch(showAlert("Xato so'rov yuborildi"));
//       console.log("err", err);
//     }
//   };
// }
