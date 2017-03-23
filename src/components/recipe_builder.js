import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';

class RecipeBuilder extends Component {
  handleFormSubmit(formProps) {
    this.props.addRecipe(formProps);
  }

  render() {
    const { handleSubmit, fields: { recipeName, ingredients }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Recipe:</label>
          <input className='form-control' {...recipeName} />
        </fieldset>
        <fieldset className='form-group'>
          <label>Ingredients:</label>
          <input className='form-control' {...ingredients} />
        </fieldset>
        <button action='submit' className='btn btn-primary'>Add Recipe</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'buildrecipe',
  fields: ['recipeName', 'ingredients']
}, null, actions)(RecipeBuilder);
