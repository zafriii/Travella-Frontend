import React, {useState} from 'react'
import './login.css'

function Login() {
 
const [user,setUser] = useState({
    email:"",
    password:""

})


const handleInput = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value 
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user)
}


  return (
    <div>

      <div className="login">

      <div className="login-form">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <div>
              
              <input type='email'
              name='email' 
              placeholder='enter your email' 
              id='email' 
              required
              autoComplete='off'
              value={user.email} 
              onChange={handleInput}/>

              <input type='password'
              name='password' 
              placeholder='enter your password' 
              id='password' 
              required
              autoComplete='off'
              value={user.password} 
              onChange={handleInput}/>


              <button type='submit'>Login</button>
              
              
              </div> 


          </form>

      </div>
      </div>
</div>
  )
}

export default Login



