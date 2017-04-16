import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
  render() {
    console.log(this.props.recipeName);
    console.log(this.props.recipes);
    return (
      <div>Edit Form {this.props.recipeName}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(EditForm);
