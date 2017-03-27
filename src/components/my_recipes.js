import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyRecipes extends Component {
  componentWillMount() {
    this.props.getCurrentUserRecipes();
  }

  handleDeleteItem = id => {
    this.props.deleteRecipe(id);
  }

  render() {
    if(!this.props.recipes) return <div>Loading...</div>
    else {
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
            <button onClick={() => this.handleDeleteItem(recipe._id)}>Delete</button>
          </li>
        ) 
      });

      return (
        <ul>
          {recipeEntry}
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  return { 
    recipes: state.recipe.uniquerecipes,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(MyRecipes);
