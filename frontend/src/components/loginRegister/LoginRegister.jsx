// import React, { useState } from 'react'; 
// import './loginregister.css'; // Styling file



// const LoginRegister = () => {
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  
//   const handleToggle = () => {
//     setIsSignUp(!isSignUp); 
//   };

//   return (
//     <div className="auth-container">
      
//       <div className="auth-box">
//         {/* Login Form */}
//         <div className={`form-side log-in ${isSignUp ? 'slide-out' : 'slide-in'}`}>
//           <h2 className="form-titleLOGIN">Login</h2>
          
//           <label htmlFor="login-email" className="auth-label">Email</label>
//           <input id="login-email" type="email" placeholder="Email" className="auth-input" />
          
//           <label htmlFor="login-password" className="auth-label">Password</label>
//           <input id="login-password" type="password" placeholder="Password" className="auth-input" />
          
//           <p className="toggle-form" onClick={handleToggle}>
//             Don't have an account? Sign Up
//           </p>

//           <button className="auth-btn">Login</button>
          
//         </div>




//         {/* Signup Form */}
//         <div className={`form-side sign-up ${!isSignUp ? 'slide-out' : 'slide-in'}`}>
//           <h2 className="form-titleSIGNUP">Sign Up</h2>
          
//           <label htmlFor="signup-username" className="auth-label1">Username</label>
//           <input id="signup-username" type="text" placeholder="Username" className="auth-input" />
          
//           <label htmlFor="signup-email" className="auth-label1">Email</label>
//           <input id="signup-email" type="email" placeholder="Email" className="auth-input" />
          
//           <label htmlFor="signup-password" className="auth-label1">Password</label>
//           <input id="signup-password" type="password" placeholder="Password" className="auth-input" />

//           <p className="toggle-formSIGNUP" onClick={handleToggle}>
//             Already have an account? Login
//           </p>

//           <button className="auth-btn1">Sign Up</button>
          
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegister;

// import React, { useState } from 'react';
// import './loginregister.css'; // Styling file

// const LoginRegister = () => {
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleToggle = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message); // Login successful
//         console.log('Token:', data.token); // Save the token in localStorage or context
//       } else {
//         alert(data.message); // Show error message
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message); // Registration successful
//         setIsSignUp(false); // Switch to login form
//       } else {
//         alert(data.message); // Show error message
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         {/* Login Form */}
//         <div className={`form-side log-in ${isSignUp ? 'slide-out' : 'slide-in'}`}>
//           <h2 className="form-titleLOGIN">Login</h2>

//           <label htmlFor="login-email" className="auth-label">Email</label>
//           <input
//             id="login-email"
//             type="email"
//             placeholder="Email"
//             className="auth-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label htmlFor="login-password" className="auth-label">Password</label>
//           <input
//             id="login-password"
//             type="password"
//             placeholder="Password"
//             className="auth-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="toggle-form" onClick={handleToggle}>
//             Don't have an account? Sign Up
//           </p>

//           <button className="auth-btn" onClick={handleLogin}>Login</button>
//         </div>

//         {/* Signup Form */}
//         <div className={`form-side sign-up ${!isSignUp ? 'slide-out' : 'slide-in'}`}>
//           <h2 className="form-titleSIGNUP">Sign Up</h2>

//           <label htmlFor="signup-username" className="auth-label1">Username</label>
//           <input
//             id="signup-username"
//             type="text"
//             placeholder="Username"
//             className="auth-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <label htmlFor="signup-email" className="auth-label1">Email</label>
//           <input
//             id="signup-email"
//             type="email"
//             placeholder="Email"
//             className="auth-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label htmlFor="signup-password" className="auth-label1">Password</label>
//           <input
//             id="signup-password"
//             type="password"
//             placeholder="Password"
//             className="auth-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="toggle-formSIGNUP" onClick={handleToggle}>
//             Already have an account? Login
//           </p>

//           <button className="auth-btn1" onClick={handleSignup}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegister;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './loginregister.css'; // Styling file

const LoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Registration successful
        setIsSignUp(false); // Switch to login form
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('http://localhost:4000/api/user/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }), // Ensure this matches the backend's expectations
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       alert(data.message); // Login successful
  //       localStorage.setItem('token', data.token); // Save the token
  //       navigate('/home'); // Redirect to the home page
  //     } else {
  //       alert(data.message); // Show error message
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert('Something went wrong. Please try again.');
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log('Request body:', { email, password }); // Log the request body
      console.log('Response status:', response.status); // Log the response status
  
      const data = await response.json();
      console.log('Response data:', data); // Log the response data
  
      if (response.ok) {
        alert(data.message); // Login successful
        localStorage.setItem('token', data.token); // Save the token
        navigate('/home'); // Redirect to the home page
      } else {
        alert(data.message); // Show error message
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password" className="auth-label">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="signup-email" className="auth-label1">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="signup-password" className="auth-label1">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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