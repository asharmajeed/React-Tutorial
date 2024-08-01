import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div>
        <h1>Login</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username'/> <br/><br/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/> <br/><br/>
        <button onClick={handleSubmit}>Submit</button><br/><br/>
    </div>
  )
}

export default Login