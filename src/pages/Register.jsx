import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from 'react-icons/fa6';
import { toast } from "react-toastify";
import registerLottie from "../assets/lottie.json"
import Lottie from "lottie-react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { TabTitle } from "../utils/General";



const Register = () => {
    TabTitle('WhereIsIt-registrationPage')


  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword]= useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const checkPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(checkPassword.test(password) === false ){
      setNameError('password must have one lowercase, one uppercase, one digit and must be six character   ')
      return;
    }
    else{
      setNameError("");
    }
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error)
            // console.log(error);
            setUser(user);
          });
      })
  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       toast.error(errorMessage, errorCode);
        
      });
      toast.success("Congratulation! you successfully registered ")
    
  };
  return (
    <div className="md:flex justify-center min-h-screen items-center gap-12">
   <div>
            <Lottie className='w-[250px]' animationData={registerLottie} loop={true}></Lottie>
        </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-green-800 text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            {/* <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            /> */}
            <label className="input validator">

<div className='relative'>
<input
   type={showPassword ? 'text' : 'password'} name='password'
   

 />
 <button type="button" onClick={()=>{setShowPassword(!showPassword)}}
 className='btn btn-xs absolute ml-20'>{

   showPassword ? <FaEyeSlash></FaEyeSlash>: <FaEye> </FaEye>
 }</button>
</div>

</label>
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            <button type="submit" className="btn  hover:bg-green-800 hover:text-white  bg-green-100 text-green-800 mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-green-800" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;