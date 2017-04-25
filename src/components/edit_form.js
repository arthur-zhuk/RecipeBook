import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    this.props.editRecipe(formProps, this.props.id);
    console.log(`sending form with id:${this.props.id}`)
    this.props.resetForm('editrecipe');
  }

  render() {
    const { handleSubmit, fields: { editName, editIngs }} = this.props;

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
        <button action='submit' className='edit-recipe-btn'>Edit Recipe</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'editrecipe',
  fields: ['editName', 'editIngs']
}, null, actions)(EditForm);
