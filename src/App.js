import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todolist from './todolist';
import Sidemenu from './sidemenu';



function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/todolist" component={Todolist} />
    <Route path="/sidemenu" component={Sidemenu} />
    </Switch>
    </div>
  );
}
export default App;
