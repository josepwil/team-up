import React from 'react';
import { BrowserRouter as Router, 
Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage' 
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage';
import Layout from './components/Layout';
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
              <RegisterPage setUser={setUser}/>
            </Route>
            <Route path="/">
              {user ? <Layout /> : <LandingPage />}
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
