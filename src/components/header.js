import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key="my" className='nav-item'> 
          <Link className='nav-link' to='/my_recipes'>My Recipes</Link>
        </li>,
        <li key='signout' className='nav-item'> 
          <Link className='nav-link' to='/signout'>Sign Out</Link>
        </li>
      ]
    } else {
      return [
        <li key='in' className='nav-item'>
          <Link className='nav-link' to='/signin'>Sign In</Link>
        </li>,
        <li key='up' className='nav-item'>
          <Link className='nav-link' to='/signup'>Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Recipe Book</Link>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
