import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

// images/styles
import signIn from '../images/sign_in.jpeg'
import '../styles/LoginPage.css'

import CloseButton from './CloseButton'

const LoginPage = ({ setUser }: any) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    axios.post('/api/users/login', {
      email, 
      password
    })
      .then(res => {
        if(res.status === 200) {
          setError('')
          setUser({
            email: res.data.email,
            id: res.data._id,
            name: res.data.name
          })
          history.push('/')
        } 
      })
      .catch((err) => {
        setError(err.response.data.error)
      })
    
  }

  return(
    <div className="loginPageContainer">
      <CloseButton />
      <div className="loginFormContainer">
        <h3>Sign in</h3>
        <form className="loginFormContainer" onSubmit={handleSubmit}>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="sign in" />
        {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
      </div>
      <img src={signIn} alt="aPlant" className="loginImage" />
      
    </div>
  )
}

export default LoginPage;