import register from '../images/register.jpeg'
import '../styles/LoginPage.css'

const RegisterPage = () => {
  return(
    <div className="loginPageContainer">
      <div className="loginFormContainer">
        <h3>Register</h3>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <input type="text" placeholder="confirm password"/>
        <button>register</button>
      </div>
      <img src={register} alt="aPlant" className="loginImage" />
      
    </div>
  )
}

export default RegisterPage;