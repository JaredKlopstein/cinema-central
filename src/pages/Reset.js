import React, {useState} from 'react'
import "./SignIn.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { Button,Input } from '@mui/material'
import Logo from '../assets/fulllogo.png'
import { useAuthState } from "react-firebase-hooks/auth";

function Reset() {
    const [email, setEmail] = useState('')
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    
  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent")
  }
  return (
    <div className="login">
    <div className="login__container">
      <img className='login__logo' src={Logo} alt="" />
      <Input placeholder="Enter Email" value={user ? user.email : email} onChange={e => setEmail(e.target.value)} className='navbar__Search' variant="filled"/>
      <Button className="login__btn login__google" onClick={() => triggerResetEmail()}>
      Get Reset Email
      </Button>
      <div>
      </div>
      <div>
        Don't have an account? <Link to="/signup">Register</Link> now.
      </div>
    </div>
  </div>
  )
}

export default Reset