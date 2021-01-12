import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Main from './components/Main';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Words from './components/Words/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/words" component={Words} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
