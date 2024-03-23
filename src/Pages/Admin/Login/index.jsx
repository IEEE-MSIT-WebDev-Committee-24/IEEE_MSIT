import React from 'react'

import "./index.css";
const AdminLogin = () => {
  return (
    <div className="form-container">

      <div className="message-container">
        <div className="message">Welcome Admin</div>
      </div>

      <div className="inputs-container">
        <input className="input input__email" type="text" placeholder="Email Address" name="uname" />

        <input className="input input__password" type="password" placeholder="Password" name="pwd" />
      </div>

      <div className="buttons-container">
        <button className="option option__login">Log In</button>
        {/* 
        <button className="option option__signup">Sign Up</button> */}
      </div>
    </div>
  )
}

export default AdminLogin