import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartGame from './StartGame/StartGame'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <StartGame /> 
          </Route>
          <Route path="/play">
            <Wow />
          </Route>
      </Switch>
    </Router>
  )
}

function Wow() {
  return <h1>Wow</h1>
}

export default App;
