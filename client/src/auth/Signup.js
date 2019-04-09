import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      department: ""
    };
  }
  render() {
    return (
      <>
        <h2> Sign up here </h2>

        <form onSubmit={this.addUser}>
          <input
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
            name="username"
            className="usernameInput"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="password"
            value={this.state.password}
            name="password"
            className="passwordInput"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="department"
            value={this.state.department}
            name="department"
            className="departmentInput"
          />
          <button type="submit" className="addBtn" onSubmit={this.addUser}>
            Sign up
          </button>
        </form>
      </>
    );
  }

  addUser = e => {
    e.preventDefault();
    this.props.addAnotherUser(e, this.state);

    this.setState({
      username: "",
      password: "",
      email: ""
    });
  };

  handleInputChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default Signup;
