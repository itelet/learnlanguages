import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import {connect} from 'react-redux'

import './index.css'

import {signout} from '../../store/actions/authAction';

const Signedin = (props) => {
    return (
        <div>
            <Button onClick={props.signOut} variant="signout" className="Buttons">Sign out</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signout())
    }
}

export default connect(null, mapDispatchToProps)(Signedin);