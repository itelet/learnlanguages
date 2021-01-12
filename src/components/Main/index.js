import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function index() {
    return (
        <div className="mainWrapper">
            <h1 className="welcomeText">Welcome to Learn_A_Language</h1>
            <div className="divFirst"></div>
            <div className="divSecond"></div>
            <div className="middleWrapper">
                <p className="attentionText">
                    In order to use this site, you either, have to create an account,
                </p>
                <div className="registerWrapper">
                    <button type="button" className="registerButton" onClick={() => window.location.href = ('/signup')}>Register</button>
                </div>
            </div>
            <p className="attentionText">
            or log in to an already existing one!
            </p>
            <div className="loginWrapper">
                <button type="button" className="loginButton" onClick={() => window.location.href = ('/signin')}>Login</button>
            </div>
        </div>
    )
}
