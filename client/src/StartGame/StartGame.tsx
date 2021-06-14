import * as React from 'react';
import { useState, useEffect } from 'react';
import './StartGame.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function StartPage() {
    const [gameCreated, setGameCreated] = useState(false)

    return (
        <div className="main-container">
            <div className="sides"></div>
            <div className="sides"></div>
            <div className="sides"></div>
            <div className="sides"></div>
            <div className="sides">
                <div className="middle-container">
                    <h1>Let's Play Cards</h1>
                    <Link to="/play?game=hello">
                        <div className="button-container">
                            <button onClick={createGameClicked}>Create Game</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="sides"></div>
            <div className="sides"></div>
            <div className="sides"></div>
            <div className="sides"></div>
        </div>
    )

    function createGameClicked() {
        setGameCreated(true)
    }

    function Thing() {
        return (
            <div>
            <h2 className="center">Send this link to your friends</h2>
            <div className="center">
                <input className="input-box" onClick={inputClicked} value="https://letsplaycards.xyx?play=3h48fh4" contentEditable={false} />
            </div>
        </div>
        )
    }

    function inputClicked(e: any) {
        console.log(e)
    }
}

export default StartPage