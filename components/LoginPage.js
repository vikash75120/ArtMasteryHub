import React from 'react';
import '../styles/login.scss';

const loginPage = () => {
  return (
    <div>
      <div className='login-container'>
        <h1>Login</h1>
        <form>
        <div className='email-div'>
          <label  className='email-label' for="email">E-Mail Address</label>
          <input type='text' name='email' id='email-input' autoFocus/>
        </div>
        <div className='password-div'>
          <label className='password-label' for="password">Password</label>
          <input id='password-input' type='password' name='password' required autocomplete="current password"/>
        </div>
        <div className='remember-div'>
          <input type='checkbox' id='remember-input' name='remember'/>
          <label className='remember-label' for="remember">Remember me</label>
        </div>
        <button type='submit' className='login-button'>LOGIN</button>
        <div className='forget-div'>
          <a className='forget-anchor' href='www.google.com'>Forget Your Password?</a>
        </div>
        </form>
      </div>
    </div>
  )
}

export default loginPage;