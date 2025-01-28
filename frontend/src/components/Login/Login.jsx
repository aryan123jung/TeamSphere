import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImCross } from "react-icons/im";

import "../Login/login.css";

const Login = ({closeLogin,openSignup}) => {
  // const navigate = useNavigate();

  return (
    <div className="login"> {/* Main container */}
    <button className="close-btn" onClick={closeLogin}>
    <ImCross />

    </button>
   
    
      <div className="form-box"> {/* Form box */}
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="links">
            <Link to="">Forgot password?</Link>
          </div>

          <button className="login-button">Login</button>

          <div className="signup-link">
            <span>Don't have an account? </span>
            <span 
            onClick={openSignup}
            style={{color:"rgb(180,234,16)", cursor:"pointer"}}
            >
              {" "}
              Sign-up now
              </span>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Login;