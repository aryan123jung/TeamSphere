import React, { useState } from 'react'; 
import './loginregister.css'; // Styling file



const LoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  
  const handleToggle = () => {
    setIsSignUp(!isSignUp); 
  };

  return (
    <div className="auth-container">
      
      <div className="auth-box">
        {/* Login Form */}
        <div className={`form-side log-in ${isSignUp ? 'slide-out' : 'slide-in'}`}>
          <h2 className="form-titleLOGIN">Login</h2>
          
          <label htmlFor="login-email" className="auth-label">Email</label>
          <input id="login-email" type="email" placeholder="Email" className="auth-input" />
          
          <label htmlFor="login-password" className="auth-label">Password</label>
          <input id="login-password" type="password" placeholder="Password" className="auth-input" />
          
          <p className="toggle-form" onClick={handleToggle}>
            Don't have an account? Sign Up
          </p>

          <button className="auth-btn">Login</button>
          
        </div>




        {/* Signup Form */}
        <div className={`form-side sign-up ${!isSignUp ? 'slide-out' : 'slide-in'}`}>
          <h2 className="form-titleSIGNUP">Sign Up</h2>
          
          <label htmlFor="signup-username" className="auth-label1">Username</label>
          <input id="signup-username" type="text" placeholder="Username" className="auth-input" />
          
          <label htmlFor="signup-email" className="auth-label1">Email</label>
          <input id="signup-email" type="email" placeholder="Email" className="auth-input" />
          
          <label htmlFor="signup-password" className="auth-label1">Password</label>
          <input id="signup-password" type="password" placeholder="Password" className="auth-input" />

          <p className="toggle-formSIGNUP" onClick={handleToggle}>
            Already have an account? Login
          </p>

          <button className="auth-btn1">Sign Up</button>
          
          
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

