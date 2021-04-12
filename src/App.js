import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { connect } from 'react-redux'

import NavbarComp from './components/Navbar'
import Main from './components/Main';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    const { auth, authError } = this.props;
    return (
      <div className="App">
        <NavbarComp />
        <Switch>
          {auth.uid ? <Route exact path="/" component={Dashboard} /> : <Route exact path="/" component={Main} />}
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authErr
  }
}

export default connect(mapStateToProps)(App);