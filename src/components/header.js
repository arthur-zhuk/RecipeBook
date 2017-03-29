import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key="my" className='snip1211'> 
          <Link to='/my_recipes'>My Recipes</Link>
        </li>,
        <li key='signout' className='snip1211'> 
          <Link to='/signout'>Sign Out</Link>
        </li>
      ]
    } else {
      return [
        <li key='in' className=''>
          <Link to='/signin'>Sign In</Link>
        </li>,
        <li key='up' className=''>
          <Link to='/signup'>Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
        <nav className='snip1211'>
          <Link to='/' className=''>
              Recipe Book
          </Link>
          <ul className='snip1211'>
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
