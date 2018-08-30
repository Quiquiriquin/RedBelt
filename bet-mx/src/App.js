import React, { Component } from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './estilos/navEstilos.css';
import './estilos/login.css'
import logo from './logo.svg';

import './App.css';
import NavBar from './components/navBar.js';
import LogIn from './components/login.js'

class App extends Component {
  state = {
    isLogged : false
    
  }

  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
        <main>  
          <Route exact path= '/sign' component={LogIn}/>
        </main>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
