import React from 'react';
import { connect } from 'react-redux';

const AllRecipes = (props) => {
  { /* const recipesList = props.recipes.map(recipe => <li key={recipe}>{recipe}</li>); */ }
  console.log(props.ingredients);
  return <div>All Recipes View</div> 
}

const mapStateToProps = state => {
  return { ingredients: state.recipe.recipes };
}

export default connect(mapStateToProps)(AllRecipes);
