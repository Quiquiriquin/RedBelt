import React, { Component } from 'react'
import axios from 'axios';
import betMX from './betMX.png'

class NavBar extends Component {
    
    login = (e) => {
        return this.render("http://localhost:3000/sign");
    }

    render() { 
        return ( 
        
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark navBarPer" id="navBarPer">
          <a className="navbar-brand" href="http://localhost:3000">
            <img src={betMX} style={{height : 70}}></img>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/standings">Standings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/bet">Bet</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/rules">Rules</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button id='signup' class="btn btn-SignUS mr-2" type="button">Sign Up</button>
            <button id='login' onClick={this.login} class="btn btn-LogIn my-2 my-sm-0" type="button">Login</button>
          </form>
            </nav>
         );
    }
}
 
export default NavBar;