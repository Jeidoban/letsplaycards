import * as React from 'react';
import { useState, useEffect } from 'react';
import './StartGame.css'
import io from 'socket.io-client'
import arrow from '../images/Polygon1.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function StartPage() {
  const socket = io('http://127.0.0.1:3001')
  const [gameCreated, setGameCreated] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [gameID, setGameID] = useState('')
  const [expansionClicked, setExpasionClicked] = useState(false)
  const [expansions, setExpansions] = useState<Expansion>([])

  type Expansion = { name: string, checked: boolean }[]  

  
  useEffect(() => {
    socket.emit('getExpansions', (expansionss: any) => {
      setExpansions(expansionss)
    })
  }, [])

  // return (
  //     <div className="main-container">
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //         <div className="sides">
  //             <div className="middle-container">
  //                 <h1>Let's Play Cards</h1>
  //                 <div className="center">
  //                     <h3>Choose your name: </h3>
  //                     <input type="text" name="name" onChange={(e) => setPlayerName(e.target.value)} id="name"/>
  //                     <h3>Choose your expansions</h3>
  //                     <div className="expansions">
  //                         {expansions.map(item => {
  //                             function checkExpansions(event: any) {
  //                                 item.checked = event.target.checked
  //                                 console.log(expansions)
  //                             }
  //                             return (
  //                                 <div>
  //                                     <input key={item.name} name={item.name} onChange={checkExpansions} type="checkbox"/>
  //                                     <label htmlFor="item">{item.name}</label>
  //                                 </div>
  //                             )
  //                         })}
  //                     </div>
  //                 </div>
  //                 <Link to={'/'}>
  //                     <div className="button-container">
  //                         <button onClick={createGameClicked}>Create Game</button>
  //                     </div>
  //                 </Link>
  //             </div>
  //         </div>
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //         <div className="sides"></div>
  //     </div>
  // )

  return (
    <div>
      <header>
        <h1>Let's Play Cards!</h1>
        <h2>A super offensive card game</h2>
      </header>
      <section className="card">
        <div className="content">
          <h1>Game Options</h1>
          <form action="#" method="POST">
            <label htmlFor="username">Name</label>
            <input type="text" id="username" onChange={(e) => setPlayerName(e.target.value)} required />
            <label htmlFor="cards">Expansions</label>
            <button className="listtrigger" onClick={(e) => {
              e.preventDefault()
              setExpasionClicked(!expansionClicked)
            }}>Select Cards<img className="arrow" src={arrow} /></button>
            {expansionList()}
          </form>
        </div>
      </section>
    </div>
  )

  function createGameClicked() {
    setGameCreated(true)
    setGameID(Math.random().toString(36).substr(2, 9))
  }

  function checkExpansions(event: any, index: any) {
    setExpansions(prev => {
      prev[index].checked = event.target.checked
      return prev
    })
    //expansions[index].checked = !expansions[index].checked 
    console.log(expansions)
  }

  function expansionList() {
    if (expansionClicked) {
      return (
        <div className="cardlist">
          {expansions.map((item, index) => {
            return (
              <li>
                  <input id="selectall" key={item.name} name={item.name} defaultChecked={item.checked} onChange={(e) => checkExpansions(e, index)} type="checkbox" />
                  <label key={item.name} htmlFor={item.name}>{item.name}</label>
              </li>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button className="creategame" type="submit">Create Game</button>
        </div>
      )
    }

  }
}

export default StartPage