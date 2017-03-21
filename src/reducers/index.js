import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import recipeReducer from './recipe_reducer';

const rootReducer = combineReducers({
  form,
  recipe: recipeReducer,
  auth: authReducer
});

export default rootReducer;
