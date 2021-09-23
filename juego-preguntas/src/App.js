import './App.css';

import { Menu } from './Componentes/Menu/Menu';
import { Preguntas } from './Componentes/Preguntas/Preguntas';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Admin } from './Componentes/Admin/Admin';

// import { Router, Switch, Route, Link } from 'react-router-dom;'


function App() {

  return (
    <>
      <div className="App-menu"> 
        <Menu />
      </div>

      <div className="App-preguntas">
        <Preguntas />
        <Admin />
      </div>
    </>
  );
}

export default App;