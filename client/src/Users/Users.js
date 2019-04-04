import React, { Component } from "react";
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  };
  
  componentDidMount() {
      const token = localStorage.getItem('jsonWebToken');
      const reqOptions = {
          headers: {
              authorization: token,
          },
      };
      axios.get('http://localhost:5000/api/users')
      .then(res => {
        //   console.log(res);
          this.setState({ users: res.data})
      });
  }

  render() {
    return (
      <>
        <h2> List of Users and their Departments </h2>
        <div>
          {this.state.users.map(eachUser => (
            <div key={eachUser.id} >
              <li>Username: {eachUser.username} </li>
              <li>Department: {eachUser.department} </li>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Users;
