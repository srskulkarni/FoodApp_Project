import React, { useState } from 'react'
import './LogPop.css'
import { assets } from '../../assets/assets'

const LogPop = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="logpop-container">
        <div className="logpop-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='logpop-inputs'>
          {currState === 'Login' ? <></> : <input type="text" placeholder='Username' required />}
          <input type="text" placeholder='Email' required />
          <input type="text" placeholder='Password' required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="logpop-conditions">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currState === 'Login' ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click Here</span></p> :
          <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LogPop
