import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';

class RecipeBuilder extends Component {
  handleFormSubmit(formProps) {
    this.props.addRecipe(formProps);
    this.props.resetForm('buildrecipe');
  }

  render() {
    const { handleSubmit, fields: { recipeName, ingredients, steps }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Recipe:</label>
          <input className='form-control' {...recipeName} />
          <span>Enter the name of the recipe</span>
        </fieldset>
        <fieldset className='form-group'>
          <label>Ingredients:</label>
          <input className='form-control' {...ingredients} />
          <span>Enter ingredients seperated by commas</span>
        </fieldset>
        <fieldset className='form-group'>
          <label>Steps:</label>
          <input className='form-control' {...steps} />
          <span>Describe how to create your recipe</span>
        </fieldset>
        <button action='submit' className='btn btn-primary'>Add Recipe</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'buildrecipe',
  fields: ['recipeName', 'ingredients', 'steps']
}, null, actions)(RecipeBuilder);
