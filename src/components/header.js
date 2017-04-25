import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../large_garden-veggies.png";

class Header extends Component {

  handleNavClick(id) {
    let root = document.getElementsByClassName('selected');
    if (root.length > 0) {
      document.getElementById(root[0].id).classList.remove('selected');
    }
    document.getElementById(id).classList.add('selected');
  }

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <NavLink to='/' key="logo">
          <li onClick={() => this.handleNavClick('allRecipesDiv')} key='logo' className='recipeLogo'>
                <img src={logo} className='vlogo' alt='Logo' />
          </li>
        </NavLink>,
        <NavLink key='all' to='/'>
          <li onClick={() => this.handleNavClick('allRecipesDiv')} key='all' id='allRecipesDiv'>
              All Recipes
          </li>
        </NavLink>,
        <NavLink key="my" to='/my_recipes'>
          <li onClick={() => this.handleNavClick('myRecipesDiv')} key='my' id='myRecipesDiv'>
              My Recipes
          </li>
        </NavLink>,
        <NavLink key='out' to='/signout'>
          <li key='out' id='signoutDiv'>
              Sign Out
          </li>
        </NavLink>
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
