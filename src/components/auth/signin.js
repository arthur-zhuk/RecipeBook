import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  renderNewRoute() {
    if (this.props.authenticated) {
      return <Redirect to='/' />
    }
  }
  
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    console.log(this.props.errorMessage);
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Bad Login Info</strong> {this.props.errorMessage}
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
          {email.touched && email.error && <div className='error'>{email.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control' />
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        {this.renderAlert()}
        {this.renderNewRoute()}
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }

  return errors;
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.auth.errors,
    authenticated: state.auth.authenticated
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
