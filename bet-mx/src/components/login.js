import React, { Component } from 'react';
import bgLogin from './fondoLogin_.jpg';


class LogIn extends Component {
    state = {  }
    render() { 
        return (
            <div className="d-flex flex-row-wrap justify-content-center w-100 fondo">
                <div className="d-inline w-50 align-middle" style={{height:590}} >
                    <section className="login-form text-center">
                        <form>
                            <div className="d-block bg-secondary p-5 mt-5">
                                <span className="float-left mb-2">Correo:</span>
                                <input type="email" name="email" placeholder="Email" required className="form-control input-sm mb-4" value="example@hotmail.com" />
                                <span className="float-left mb-2">Contraseña:</span>
                                <input type="password" className="form-control input-lg mb-3" id="password" placeholder="Password" required="" />
                                <button type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                                <a href="http://localhost:3000/register">Create your account</a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
          );
    }
}
 
export default LogIn;