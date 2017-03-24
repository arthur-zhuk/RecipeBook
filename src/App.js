import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import MyRecipes from './components/my_recipes';
import AllRecipes from './components/all_recipes';
import RecipeBuilder from './components/recipe_builder';
import RequireAuth from './components/auth/require_auth';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
 render () {
   return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Header />
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <Route path='/' component={AllRecipes} />
            </div>
            <div className='col-md-6'>
              <Route path='/recipe_builder' component={RequireAuth(RecipeBuilder)} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <Route path='/signout' component={Signout} />
              <Route path='/my_recipes' component={MyRecipes} />
            </div>
          </div>
        </div>
      </Router>
    ); 
  }
}

export default App;
