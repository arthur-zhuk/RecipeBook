import axios from 'axios';
import { 
  ADD_RECIPE,
  FETCH_CURRUSERREC,
  REMOVE_RECIPE,
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

export function signinUser({ email, password }) {
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
    axios.post(`${ROOT_URL}/postrecipe`, { 
      recipeName, ingredients
    }, { 
      headers: {'authorization': localStorage.getItem('token')} 
    })
    .then(response => {
      dispatch({ 
        type: ADD_RECIPE,
        payload: response.data
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

export const getCurrentUserRecipes = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/my_recipes`, {
      headers: {'authorization': localStorage.getItem('token')}
    })
      .then(response => {
        console.log(`currentUserRec response:`);
        console.log(response.data);
        dispatch({
          type: FETCH_CURRUSERREC,
          payload: response.data
        });
      });
  }
}

export const deleteRecipe = (id) => {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/deleterecipe?id=${id}`, {
      headers: {'authorization': localStorage.getItem('token')}
    })
      .then(response => {
        console.log('deleteRecipe response:')
        console.log(response.data);
        dispatch({
          type: REMOVE_RECIPE,
          payload: response.data 
        });
      });
  }
}
