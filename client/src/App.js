import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Home from './Users/Home';
import Login from './auth/Login';
import Users from './Users/Users';


class App extends Component {
  render() {
    return (
      <>

      <header className='navHeader'>
        <nav>
          <NavLink to='/' >Home</NavLink> {' ||| '}

          <NavLink to='/signup' >Sign up</NavLink> {' ||| '}

          <NavLink to='/signin' >Log In</NavLink> {' ||| '}
          <NavLink to='/users' >Users</NavLink>
         

          <button onClick={this.logout}>Log out</button>

        </nav>
      </header>

      <div>
        <Route path='/' exact component={Home} />        
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Users} />
        <Route path='/users' component={Users} />
      </div>
        
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jsonWebToken');
    this.props.history.push('/signin');
  };
}

export default withRouter(App);
