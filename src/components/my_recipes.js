import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EditForm from './edit_form';
import Steps from './steps';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.props.getCurrentUserRecipes();
    this.props.getRecipes();
    this.openEditPanel = this.openEditPanel.bind(this);
  }

  handleDeleteItem = id => {
    this.props.deleteRecipe(id);
  }

  handleEditItem = ({ recipeName, ingredients, steps, id }) => {
    this.props.editRecipe({recipeName, ingredients, steps, id });
  }

  openEditPanel (recipeId) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      idClicked: recipeId
    }));
  }

  render() {
    if (!this.props.authenticated)
      return <p className='snip1211'>Please log in to view your recipes</p>
    if(!this.props.urecipes) return <p className='snip1211'>Loading Recipes...</p>
    else if (this.props.urecipes.length === 0) {
      return <div>No recipes available. Add some!</div>
    }
    else {
      const recipeEntry = this.props.urecipes.map((recipe, parentInd) => {
        const allIngs = recipe.ingredients.map((ing, i) => {
          return <li className='sub' key={i}>{ing}</li>
        });

        return (
          <li key={parentInd}>
            <div className='li-header'>{recipe.recipeName}</div><div className='author-area'> by {recipe.author}</div>
            <ul>
              {allIngs}
            </ul>
            <Steps recipe={recipe} />
            {(recipe._id === this.state.idClicked) && this.state.isToggleOn ? <EditForm name={recipe.recipeName} author={recipe.author} ings={recipe.ingredients} steps={recipe.steps} id={recipe._id} /> : undefined}
            <button className='delete' onClick={() => this.handleDeleteItem(recipe._id)}>Delete</button>
            <button
              className='edit'
              onClick={() => this.openEditPanel(recipe._id)}
            >
              {(recipe._id === this.state.idClicked) && this.state.isToggleOn ? `Close Edit Panel` : `Edit`}
            </button>
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
    urecipes: state.recipe.uniquerecipes,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(MyRecipes);
