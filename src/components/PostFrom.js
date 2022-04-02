import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";
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
  const [userForm, setUserForm] = useState({
    last_name: "",
    first_name: "",
    title: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    if (!userForm.last_name.trim()) {
      return dispatch(showAlert("Iltimos formani to'ldiring"));
    }
    const newPost = {
      userForm,
      id: Date.now().toString(),
    };
    console.log(newPost);
    dispatch(createPost(newPost));
    setUserForm({
      last_name: "",
      first_name: "",
      title: "",
    });
  };
  const onChangeHandle = (e) => {
    const cloneUserForm = userForm;
    cloneUserForm[e.target.name] = e.target.value;
    setUserForm(cloneUserForm);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="last_name" className="form-label">
            Ismingiz
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            onChange={(e) => onChangeHandle(e)}
            // value={userForm.last_name}
          />
          <label htmlFor="first_name" className="form-label">
            Familiyangiz
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            onChange={(e) => onChangeHandle(e)}
            // value={userForm.first_name}
          />
          <label htmlFor="title" className="form-label">
            Qo'shimcha ma'lumot
          </label>
          <textarea
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => onChangeHandle(e)}
            // value={userForm.title}
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
