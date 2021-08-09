import React, { useState, useEffect } from "react";
import './App.css';
import CreateGame from './CreateGame/CreateGame'
import io from 'socket.io-client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  useEffect(() => {
    // const socket = io('http://127.0.0.1:3001')
    // socket.on('hello', (arg1, arg2, arg3) => {
    //   alert(arg1 + arg2 + arg3)
    // })
    fetch('http://localhost:3001')
  })

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <CreateGame /> 
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
