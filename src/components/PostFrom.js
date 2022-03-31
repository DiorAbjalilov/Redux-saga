import React, { Component } from "react";

export default class PostFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.title);
  };
  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Post sarlavhasi
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.changeInputHandler}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Yaratish
          </button>
        </form>
      </>
    );
  }
}
