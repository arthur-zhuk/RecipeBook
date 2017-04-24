import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../large_garden-veggies.png";

class Header extends Component {


  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key='logo' className='recipeLogo'>
          <NavLink  to='/' key="logo">
              <img src={logo} className='vlogo' alt='Logo' />
          </NavLink>
        </li>,
        <li key='all'>
          <NavLink key='all' to='/'>
            All Recipes
          </NavLink>
        </li>,
        <li key='my'>
          <NavLink key="my" to='/my_recipes'>
            My Recipes
          </NavLink>
        </li>,
        <li key='out'>
          <NavLink key='out' to='/signout'>
            Sign Out
          </NavLink>
        </li>
      ]
    } else {
      return [
        <Link key='all' to='/'>
          <li>
            All Recipes
          </li>
        </Link>,
        <Link key='in' to='/signin'>
          <li>Sign In</li>
        </Link>,
        <Link key='up' to='/signup'>
          <li>
            Sign Up
          </li>
        </Link>
      ];
    }
  }

  render() {
    const selectedStyle = {
      background: 'yellow'
    }
    return (
        <nav>
          <ul>
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
