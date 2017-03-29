import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  componentWillUnmount() {
    return <div>Empty Component</div>
  }

  render() {
    return <p className='snip1211'>You are now logged out of Recipe Book</p>
  }
}

export default connect(null, actions)(Signout)
