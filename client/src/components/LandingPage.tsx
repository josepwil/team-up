import { Link, useHistory } from 'react-router-dom';
// CSS
import '../styles/LandingPage.css'
// images
import whiteboardImage from '../images/teamup_whiteboard.jpeg'
import howItWorks from '../images/how_it_works.jpeg'

const LandingPage = () => {
  const history = useHistory();

  return(
  <div className="landingPageContainer">
    <div className="landingPageNav">
      <Link to="/login">Sign in</Link>/<Link to="/register">up</Link>
    </div>
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1>Team Up</h1>
        Team up a place where you can Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatem adipisci ducimus voluptatibus voluptatum omnis impedit! Facilis dolores, dicta quam eveniet minus ipsam tenetur consequuntur sed provident accusamus velit tempora.
      </div>
      <img src={whiteboardImage} alt="whiteboardImage" className="landingPageImage" />
    </div>
    <div className="aboutContainer">
      <img src={howItWorks} alt="howItWorks" className="landingPageImage" />
      <div className="aboutContent">
        <h3>How it works</h3>
        how it works Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, molestiae maiores! Blanditiis quis sapiente neque, consequuntur debitis eos magnam, dolor labore nostrum commodi deleniti esse beatae suscipit expedita vitae cumque.
      </div>
    </div>
    <div>
      <button className="getStartedButton" onClick={() => history.push("/login")}>Get Started</button>
    </div>
  </div>
  )
}

export default LandingPage;