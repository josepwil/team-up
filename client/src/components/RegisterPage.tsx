import register from '../images/register.jpeg'
import '../styles/LoginPage.css'

import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import CloseButton from './CloseButton'

const RegisterPage = ({ setUser }: any) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return setError('passwords do not match');
    }
    axios.post('/api/users', {
      name,
      email, 
      password
    })
      .then(res => {
        if(res.status === 201) {
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
        <h3>Register</h3>
        <form className="loginFormContainer" onSubmit={handleSubmit}>
          <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <input type="submit" value="register" />
          {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
      </div>
      <img src={register} alt="aPlant" className="loginImage" />
      
    </div>
  )
}

export default RegisterPage;