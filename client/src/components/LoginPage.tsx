import signIn from '../images/sign_in.jpeg'
import '../styles/LoginPage.css'

import CloseButton from './CloseButton'

const LoginPage = () => {
  return(
    <div className="loginPageContainer">
      <CloseButton />
      <div className="loginFormContainer">
        <h3>Sign in</h3>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button>sign in</button>
      </div>
      <img src={signIn} alt="aPlant" className="loginImage" />
      
    </div>
  )
}

export default LoginPage;