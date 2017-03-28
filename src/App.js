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
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
 render () {
   const routes = [
     {
       path: '/my_recipes',
       component: RequireAuth(MyRecipes)
     },
     {
       path: '/',
       component: AllRecipes
     },
     {
       path: '/signout',
       component: Signout
     }
   ]

   const RouteWithSubRoutes = (route) => (
     <Route exact path={route.path} render={props => (
       <route.component {...props} routes={route.routes}/>
     )}/>
   )

   const signInMessage = () => {
     return <div>Sign in to add recipes!</div>
   }

   const renderBuilder = () => {
     if (!this.props.authenticated) {
       return signInMessage
     } else {
       return RequireAuth(RecipeBuilder) 
     }
   }


   return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Header />
          </div>
          <div className='row'>
            <div className='col-md-6'>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </div>
            <div className='col-md-6'>
              {RequireAuth(<RecipeBuilder />)}
              <Route path='/' component={renderBuilder()} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
            </div>
          </div>
        </div>
      </Router>
    ); 
  }
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(App);
