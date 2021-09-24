import React from "react";
import './App.css';

// import { Menu } from './Componentes/Menu/Menu';
import { Preguntas } from './Componentes/Preguntas/Preguntas';

import 'bootstrap/dist/css/bootstrap.min.css';
import  Admin  from './Componentes/Admin/Admin';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
    // <>
    //   <div className="App-menu"> 
    //     <Menu />
    //   </div>

      


    //   {/* <div className="App-preguntas">
    //     <Preguntas />
    //     <Admin />
    //   </div> */}
    // </>

    <Router>
        <div className="container">
          <div className="btn-group">
            <Link to="/"className="btn btn-dark">
              Admin
            </Link>
            <Link to="/preguntas"className="btn btn-dark">
              Preguntas
            </Link>
          </div>
          <Switch>
            <Route path="/preguntas">
                <Preguntas />
            </Route>
            <Route path="/">
              <Admin />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;