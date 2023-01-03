import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignIn.css";
import { Button } from "@mui/material";
import Logo from '../assets/fulllogo.png'
function Login() {
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
        <Button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google
        </Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;