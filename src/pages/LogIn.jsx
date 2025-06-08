import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from 'react-icons/fa6';

// import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";
import SocialLogIn from "./SocialLogIn";
import { AuthContext } from "../context/AuthContext/AuthContext";


// import { auth } from "../firebase/firebase.init";

const LogIn = () => {

  const [error, setError] = useState("");
    const [nameError, setNameError] = useState("");
    const [showPassword, setShowPassword]= useState(false);
    const emailRef = useRef();
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const checkPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(checkPassword.test(password) === false ){
      setNameError('password must have one lowercase, one uppercase, one digit and must be six character   ')
      return;
    }
 
   else {
  setNameError("")
  }
     
    
    // console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode)
        toast.error(errorCode);
      });
        //  navigate(`${location.state ? location.state : "/"}`)
      toast.success("Successfully log in")

  };




  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
              required
            />
            {/* passowrd  */}
                      <label className="input validator">
          
          <div className='relative'>
          <input
             type={showPassword ? 'text' : 'password'} name='password'
             
          
           />
           <button type="button" onClick={()=>   {setShowPassword(!showPassword)}}
           className='btn btn-xs absolute ml-20'>{
          
             showPassword ? <FaEyeSlash></FaEyeSlash>: <FaEye />
           }</button>
          </div>
          
          </label>

              {nameError && <p className="text-xs text-error">{nameError}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-outline mt-4 btn-secondary ">
              Login
            </button>
      <SocialLogIn></SocialLogIn>
            <p className="font-semibold text-center pt-5">
              Don't Have An Account ?{" "}
              <Link  to = "/auth/sign-up" className="text-secondary" >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;  