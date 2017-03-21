import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { 
  ADD_RECIPE,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
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
        // Figure out how to route back to App???
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
        // route here:
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

// Don't even think I need an action to query from DB to pull list of all
// recipes :\
//export const getRecipes = () => {
  //return (dispatch) => {
    //axios.get(`${ROOT_URL}`)
      //.then(response => {
        //dispatch({
          //type: FETCH_RECIPE
        //});
      //});
  //}
//}
