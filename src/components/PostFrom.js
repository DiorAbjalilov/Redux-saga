import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";
// export default class PostFrom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//   }
//   submitHandler = (event) => {
//     event.preventDefault();
//     const dispatch = useDispatch();
//     const { title } = this.state;
//     const newPost = {
//       title,
//       id: Date.now().toString(),
//     };
//     console.log("title", newPost);
//     dispatch(createPost(newPost));
//   };
//   changeInputHandler = (event) => {
//     this.setState((prev) => ({
//       ...prev,
//       ...{
//         [event.target.name]: event.target.value,
//       },
//     }));
//   };
//   render() {
//     return (
//       <>
//         <form onSubmit={this.submitHandler}>
//           <div className="form-group">
//             <label htmlFor="title" className="form-label">
//               Post sarlavhasi
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               name="title"
//               value={this.state.title}
//               onChange={this.changeInputHandler}
//             />
//           </div>
//           <button className="btn btn-success" type="submit">
//             Yaratish
//           </button>
//         </form>
//       </>
//     );
//   }
// }

const PostFrom = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    dispatch(createPost(newPost));
    setTitle("");
  };
  const onChangeHandle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Post sarlavhasi
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => onChangeHandle(e)}
            value={title}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Yaratish
        </button>
      </form>
    </>
  );
};

export default PostFrom;
