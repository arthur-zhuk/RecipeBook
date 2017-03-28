import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`

class Header extends Component {
  renderLinks() {

    if (this.props.authenticated) {
      return [
        <li key="my" className='nav-item'> 
          <StyledLink className='nav-link' to='/my_recipes'>My Recipes</StyledLink>
        </li>,
        <li key='signout' className='nav-item'> 
          <StyledLink className='nav-link' to='/signout'>Sign Out</StyledLink>
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

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    const Wrapper = styled.section`
       padding: 4em;
       background: papayawhip;
    `;
    
    return (
      <Wrapper>
        <nav className='navbar navbar-light'>
          <StyledLink to='/' className='navbar-brand'>
              Recipe Book
          </StyledLink>
          <ul className='nav navbar-nav'>
            {this.renderLinks()}
          </ul>
        </nav>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
