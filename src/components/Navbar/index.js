import React from 'react'
import './index.css'
import ReactLogo from '../../images/logo.svg' 

import Signedin from './signedin'
import Signedout from './signedout'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const NavbarComp = (props) => {
    const {auth} = props;
    const links = auth.uid ? <Signedin /> : <Signedout />;
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to='/'>
                    <img
                        src={ReactLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top text-danger"
                        alt="React Bootstrap logo"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                {links}
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavbarComp);