import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyRecipes extends Component {
  componentDidMount() {
    this.props.getCurrentUserRecipes();
  }

  render() {
    return (
       <div>My Recipes View</div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    recipes: state.recipe.uniquerecipes,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(MyRecipes);
