import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerCoach, loginCoach } from '../../api/api'; // Import the API functions
import './loginregister.css';

const LoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // States for Login Form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // States for Sign-Up Form
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const navigate = useNavigate();

  // Redirect to home if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const coachData = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    };

    try {
      const response = await registerCoach(coachData);

      if (response.message) {
        alert(response.message);
        // Clear sign-up fields after successful registration (optional)
        setSignupName('');
        setSignupEmail('');
        setSignupPassword('');
        setIsSignUp(false);
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const response = await loginCoach(loginData);

      if (response.token) {
        alert(response.message);
        localStorage.setItem('token', response.token); // Save token
        navigate('/home'); // Redirect to home
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Login Form */}
        <div className={`form-side log-in ${isSignUp ? 'slide-out' : 'slide-in'}`}>
          <h2 className="form-titleLOGIN">Login</h2>

          <label htmlFor="login-email" className="auth-label">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            className="auth-input"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <label htmlFor="login-password" className="auth-label">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            className="auth-input"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <p className="toggle-form" onClick={handleToggle}>
            Don't have an account? Sign Up
          </p>

          <button className="auth-btn" onClick={handleLogin}>Login</button>
        </div>

        {/* Signup Form */}
        <div className={`form-side sign-up ${!isSignUp ? 'slide-out' : 'slide-in'}`}>
          <h2 className="form-titleSIGNUP">Sign Up</h2>

          <label htmlFor="signup-username" className="auth-label1">Username</label>
          <input
            id="signup-username"
            type="text"
            placeholder="Username"
            className="auth-input"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />

          <label htmlFor="signup-email" className="auth-label1">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Email"
            className="auth-input"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />

          <label htmlFor="signup-password" className="auth-label1">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            className="auth-input"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />

          <p className="toggle-formSIGNUP" onClick={handleToggle}>
            Already have an account? Login
          </p>

          <button className="auth-btn1" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
