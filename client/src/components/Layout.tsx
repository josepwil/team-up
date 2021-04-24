import '../styles/Layout.css'
import { BrowserRouter as Router, 
  Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import AddProjectForm from './AddProjectForm'

const Layout = ({ setUser }:any) => {
  return(
  <Router>
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
          <Switch>
            <Route path="/add">
              <AddProjectForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </div>
  </Router>
  )
}

export default Layout;