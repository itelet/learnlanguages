import React from 'react'
import Button from 'react-bootstrap/Button' 

import Form from 'react-bootstrap/Form'
import './index.css'

import {Link } from 'react-router-dom'

const mystyle = {
    color: "#231c2b",
    backgroundColor: "transparent",
    margin: "10px",
    border: "1px solid #231c2b"
  };

function signedout() {
    return (
        <div>
            <Link to="/signin">
                <Button variant="signin" className="Buttons">Sign in</Button>
            </Link>
            <Link to="/signup">
                <Button variant="signin" className="Buttons">Sign up</Button>
            </Link>
        </div>
    )
}

export default signedout
