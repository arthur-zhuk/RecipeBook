import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  FETCH_RECIPE,
  FETCH_CURRUSERREC,
  EDIT_RECIPE
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] }
    case FETCH_RECIPE:
      return { ...state, recipes: action.payload }
    case FETCH_CURRUSERREC:
      return { ...state, uniquerecipes: action.payload }
    case REMOVE_RECIPE:
      console.log(`payload: ${action.payload.id}`);
      return state.recipes.filter(recipe => recipe._id !== action.payload.id)
      
    default:
      return state;
  }
}
