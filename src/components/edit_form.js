import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    this.props.editRecipe(formProps);
  }

  render() {
    const { handleSubmit, fields: { editName, editIngs, id }} = this.props;
    console.log(this.props.id);

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Recipe:</label>
          <input className='form-control' {...editName} />
          <span>Enter the name of the recipe</span>
        </fieldset>
        <fieldset className='form-group'>
          <label>Ingredients:</label>
          <input className='form-control' {...editIngs} />
          <span>Enter ingredients seperated by commas</span>
        </fieldset>
        <button action='submit' className='btn btn-primary'>Edit Recipe</button>
        {/*
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.props.name} onChange={handleNameChange} /> 
        <input type='text' value={this.props.ings} onChange={handleIngChange}/> 
        Edit Form {this.props.name}
      </form>
      */}
      </form>
    )
  }
}

export default reduxForm({
  form: 'buildrecipe',
  fields: ['recipeName', 'ingredients']
}, null, actions)(EditForm);

