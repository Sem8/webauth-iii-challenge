import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h2>Log in here</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username" />
          <input
            value={this.state.username}
            onChange={this.handleInputChanges}
            placeholder="Username..."
            name="username"
            type="text"
          />

          <label htmlFor="password" />
          <input
            value={this.state.password}
            onChange={this.handleInputChanges}
            placeholder="Password..."
            name="password"
            type="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

  handleInputChanges = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", this.state)
      .then(res => {
          localStorage.setItem('jsonWebToken', res.data.token);

          this.props.history.push('/users');
      })
      .catch(error => console.error(error));
  };
}

export default Login;
