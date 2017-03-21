import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  FETCH_RECIPE,
  EDIT_RECIPE
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_RECIPE:
      console.log(`${action.payload} recipe`)
      return { ...state, recipes: action.payload }
    case FETCH_RECIPE:
      console.log(action.payload + 'fetch')
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
