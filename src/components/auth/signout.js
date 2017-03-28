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
    return <div className='col-sm-6'>You are now logged out of Recipe Book</div>
  }
}

export default connect(null, actions)(Signout)
