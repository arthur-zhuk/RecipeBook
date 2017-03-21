import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import AllRecipes from './components/all_recipes';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

 render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={AllRecipes} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/signout' component={Signout} />
        </div>
      </Router>
    ); 
  }
}

export default App;
