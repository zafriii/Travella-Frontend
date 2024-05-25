import React, { useState } from 'react'
import './reg.css'

function Reg() {

const [user,setUser] = useState({

    username:"",
    email:"",
    phone:"",
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

      <div className="reg">

          <div className="reg-form">

              <h2>Sign Up</h2>

              <form onSubmit={handleSubmit}>

                 <div>
                  
                  <input type='text'
                   name='username' 
                   placeholder='enter your username' 
                   id='username' 
                   required
                   autoComplete='off'
                   value={user.username} 
                   onChange={handleInput}/>

                  <input type='email'
                   name='email' 
                   placeholder='enter your email' 
                   id='email' 
                   required
                   autoComplete='off'
                   value={user.email} 
                   onChange={handleInput}/>

                  <input type='number'
                   name='phone' 
                   placeholder='enter your phone no' 
                   id='phon' 
                   required
                   autoComplete='off'
                   value={user.phone} 
                   onChange={handleInput}/>

                  <input type='password'
                   name='password' 
                   placeholder='enter your password' 
                   id='password' 
                   required
                   autoComplete='off'
                   value={user.password} 
                   onChange={handleInput}/>


                   <button type='submit'>Register Now</button>
                  
                  
                  </div> 


              </form>

          </div>



      </div>

    </div>
  )
}

export default Reg




