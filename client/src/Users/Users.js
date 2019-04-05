import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import Signup from "../auth/Signup";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jsonWebToken");
    const reqOptions = {
      headers: {
        authorization: token
      }
    };
    axios
      .get("http://localhost:5000/api/users", reqOptions)
      .then(res => {
        //   console.log(res);
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <NavLink to="/signup">signup</NavLink>

        <Route
          path="/signup"
          render={props => (
            <Signup {...props} addAnotherUser={this.addAnotherUser} />
          )}
        />

        <h2> List of Users and their Departments </h2>
        <div>
          {this.state.users.map(eachUser => (
            <div key={eachUser.id}>
              <li>Username: {eachUser.username} </li>
              <li>Department: {eachUser.department} </li>
            </div>
          ))}
        </div>
      </>
    );
  }

  addAnotherUser = (e, anotherUser) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", anotherUser)
      .then(res => {
        this.setState({
          users: res.data
        });
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default Users;
