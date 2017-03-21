import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  FETCH_RECIPE,
  EDIT_RECIPE
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_RECIPE:
      return { ...state, recipes: action.payload }
    case FETCH_RECIPE:
      return { ...state, rList: action.payload }
    default:
      return state;
  }
}
