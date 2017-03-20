import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';

class Signin extends Component {
  renderNewRoute() {
    if (this.props.authenticated) {
      return <Redirect to='/' />
    }
  }
  
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control' />
        </fieldset>
        {this.renderAlert()}
        {this.renderNewRoute()}
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
