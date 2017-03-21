import axios from 'axios';
import { 
  ADD_RECIPE,
  AUTH_USER,
  UNAUTH_USER,
  FETCH_RECIPE
} from './types';

const ROOT_URL = 'http://localhost:3060';

export const authError = error => {
  return {
    type: AUTH_USER,
    payload: error
  }
}

export const signinUser = ({ email, password }) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(() => {
        dispatch(authError('Bad login info'));
      });
  }
}

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER }
}

export const addRecipe = ({ recipeName, ingredients }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/post`, { recipeName, ingredients })
      .then(response => {
        dispatch({ 
          type: ADD_RECIPE
        });
      });
  } 
}

export const getRecipes = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/allrecipes`)
      .then(response => {
        dispatch({
          type: FETCH_RECIPE,
          payload: response.data
        });
      });
  }
}
