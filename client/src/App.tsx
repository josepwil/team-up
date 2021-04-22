import React from 'react';
import { BrowserRouter as Router, 
Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage' 
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage';
import { UserContext } from'./UserContext';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);


  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
          <Switch>
            <Route path="/login">
              <LoginPage setUser={setUser}/>
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/">
              {user ? (<h1>loggedin</h1>) : (<LandingPage />)}
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
