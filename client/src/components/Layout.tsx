import '../styles/Layout.css'
import { BrowserRouter as Router, 
  Switch, Route, Link } from 'react-router-dom';
import Home from './Home'

const Layout = ({ setUser }:any) => {
  return(
  <div>
    <div className="navContainer">
      <div className="leftNav">
        <Link to='/'>home</Link>
      </div>
      <div className="rightNav">
        <Link to='/add'>add a project</Link>
        <p onClick={() => setUser(null)}>sign out</p>
      </div>
    </div>
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  </div>)
}

export default Layout;