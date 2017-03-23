import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RecipeBuilder from './recipe_builder';

class AllRecipes extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if(!this.props.recipes) return <div>Loading...</div>
    else {
      //console.log(this.props.recipes);
      const recipeEntry = this.props.recipes.map(recipe => {
        const allIngs = recipe.ingredients.map((ing, i) => {
          return <li key={i}>{ing}</li>
        });

        return (
          <li key={recipe._id}>
            {recipe.recipeName} by {recipe.author}
            <ul>
              {allIngs}
            </ul>
          </li>
        ) 
      });

      if (this.props.authenticated) {
        return (
          <div className='row'>
            <div className='col-md-6'>
              <ul>
                {recipeEntry}
              </ul>
            </div>
            <div className='col-md-6'>
              <RecipeBuilder />
            </div>
          </div>
        );
      } else {
        return (
          <div className='row'>
            <div className='col-md-6'>
              <ul>
                {recipeEntry}
              </ul>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return { 
    recipes: state.recipe.rList,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(AllRecipes);
