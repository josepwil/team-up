import '../styles/Layout.css'
import { Link } from 'react-router-dom';

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
  </div>)
}

export default Layout;