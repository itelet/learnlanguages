import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/authAction";

import SignSVG from '../../images/signup.svg'

class Signup extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    //console.log(authError);
    console.log(auth.uid);
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit} className="mainWrapper">
        <div style={{display: "flex"}}>
          <img className="SignSVG" src={SignSVG}></img>
          <div className="welcome">
            <h2>Learn_A_Language</h2>
          </div>
        </div>
        <div className="middle">
          <div className="mailWrapper">
            <input
              className="mail"
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="passwordWrapper">
            <input
              className="pwd"
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="submitWrapper">
            <button className="block" type="submit" className="submitButton">
              Register
            </button>
          </div>
          <div className="errMsg">
             <p>{authError}</p>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authErr,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (newUser) => dispatch(signup(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
