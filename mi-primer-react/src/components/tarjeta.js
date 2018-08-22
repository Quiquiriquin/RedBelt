import React, {Component} from 'react';
import foto from './foto.jpg';

class Tarjeta extends Component {
    render(){
        return (
            <div>
            <div style = {{ width : 400, margin : 'auto' }}>
                <div className="card" style={{ width: 400, display : 'inline-block' }}>
                <img className="card-img-top"  src={foto} alt="Card image cap" width="20%"/>
                <div className="card-body">
                    <h5 className="card-title">Enrique Alvarez / Quiquiriquin</h5>
                    <p className="card-text">Estudiante de ingeniería en sistemas computacionales. Fotógrafo de bodas. CODE4Life</p>
                    <a href="#" className="btn btn-primary">Visitar perfil</a>
                </div>
            </div>
                </div>
            </div>
        );
    }
}   

export default Tarjeta;