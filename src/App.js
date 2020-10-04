import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './components/Dashboard'
import Record from './components/Record'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/record' component={Record} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
