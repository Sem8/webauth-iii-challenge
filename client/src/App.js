import React, { Component } from 'react';
import './App.css';
import { Route, NavLink} from 'react-router-dom';

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

          <NavLink to='/login' >Log In</NavLink> {' ||| '}

          <NavLink to='/users' >Users</NavLink>

        </nav>
      </header>

      <div>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />
      </div>
        
      </>
    );
  }
}

export default App;
