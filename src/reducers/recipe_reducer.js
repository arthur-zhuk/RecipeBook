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
      return state.recipes.filter(item => item._id !== action.payload)
    default:
      return state;
  }
}
