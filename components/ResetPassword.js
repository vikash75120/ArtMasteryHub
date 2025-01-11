import React from 'react';
import '../styles/ResetPassword.scss'

const ResetPassword = () => {
  return (
    <div>
        <div className='reset-container'>
            <h1 className='heading'>RESET PASSWORD</h1>
            <form>
            <label className='reset-label' for="reset">E-Mail Address</label>
            <input id='reset-input' name='reset' type='email' />
            <button className='reset-button'>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword