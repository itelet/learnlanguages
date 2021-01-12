import React, {Component} from 'react'
import './index.css'

import {connect} from 'react-redux';
import {signin} from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom';

export class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signin(this.state);
    }
    render(){
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to="/" />
        return (
            <form onSubmit={this.handleSubmit} className="mainWrapper">
                <div className="welcome">
                    <h2>Learn_A_Language</h2>
                </div>
                <div className="middle">
                    <div className="mailWrapper">
                        <input className="mail" type="email" placeholder="E-mail" onChange={this.handleChange}></input>
                    </div>
                    <div className="passwordWrapper">
                        <input className="pwd" type="password" placeholder="Password" onChange={this.handleChange}></input>
                    </div>
                    <div className="submitWrapper">
                        <button className="submitButton">Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authErr,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signin: (creds) => dispatch(signin(creds))
    }
}

// connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
