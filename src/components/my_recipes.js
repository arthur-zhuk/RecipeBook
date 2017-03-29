import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyRecipes extends Component {
  componentWillMount() {
    this.props.getCurrentUserRecipes();
    this.props.getRecipes();
  }

  handleDeleteItem = id => {
    this.props.deleteRecipe(id);
  }

  render() {
    if (!this.props.authenticated)
      return <p className='snip1211'>Please log in to view your recipes</p>
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
            {recipe.recipeName} by {recipe.author}
            <ul>
              {allIngs}
            </ul>
            <button className='delete' onClick={() => this.handleDeleteItem(recipe._id)}>Delete</button>
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
