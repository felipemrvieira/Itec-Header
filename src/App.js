import React, { Component } from 'react';
import logo from './images/s5_logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container header-container">
            <div className="titulo">
              <img src={logo} alt="Logo Alagoas" />
            </div>
            <div className="orgao">
              <h5 className="orgao-titulo">Tecnologia da Informação</h5>
              <p className="orgao-descricao">Instituto de Tecnologia em Informática e Informação do Estado de Alagoas</p>
            </div>
            <div className="busca">
              <input type="text" name="" id="busca-principal" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
