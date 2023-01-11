import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignUp.css";
import { Button } from "@mui/material";
import Logo from '../assets/fulllogo.png'

function SignUp() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <img className='login__logo' src={Logo} alt="" />
        <Button variant="contained" onClick={signInWithGoogle}>
        SignUp with Google
        </Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;