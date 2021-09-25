import React from "react";
import './App.css';

import  Admin  from './Componentes/Admin/Admin';
import { Preguntas } from './Componentes/Preguntas/Preguntas';
import  Footer  from './Componentes/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/"className="btn btn-primary">
              Admin
            </Link>
            <Link to="/preguntas"className="btn btn-primary">
              Preguntas
            </Link>
          </ul>
        </div>
       
      </div>
        <div className="container">
          <div className="btn-group">
          </div>
          <Switch>
            <Route path="/preguntas">
                <Preguntas />
            </Route>
            <Route path="/">
              <Admin />
            </Route>
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;