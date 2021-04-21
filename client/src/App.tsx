import React from 'react';
import { BrowserRouter as Router, 
Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage' 
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
