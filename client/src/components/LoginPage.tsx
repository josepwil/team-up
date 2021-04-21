import signIn from '../images/sign_in.jpeg'
import '../styles/LoginPage.css'

const LoginPage = () => {
  return(
    <div className="loginPageContainer">
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