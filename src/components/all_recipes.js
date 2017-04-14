import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AllRecipes extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if(!this.props.recipes) return <div>Loading...</div>
    else if (this.props.recipes.length === 0) {
      return <div>No recipes available. Add some!</div>
    }
    else {
      const recipeEntry = this.props.recipes.map(recipe => {
        const allIngs = recipe.ingredients.map((ing, i) => {
          return <li className='sub' key={i}>{ing}</li>
        });

        return (
          <li key={recipe._id}>
            <div className='li-header'>{recipe.recipeName}</div> by {recipe.author}
            <ul>
              {allIngs}
            </ul>
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
    recipes: state.recipe.recipes,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(AllRecipes);
