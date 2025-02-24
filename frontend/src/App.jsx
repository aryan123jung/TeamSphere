// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

// // import Home from "./components/Home"; // Correct import path
// // import Signup from "./components/SignUp/Signup";
// // import Login from "./components/Login/Login";
// // import Addplayer from "./components/AddPlayer/Addplayer";
// // import Players from "./components/PlayersPage/Players";
// // import loginRegister from "./components/loginRegister/LoginRegister";
// // import LoginRegister from "./components/loginRegister/LoginRegister";

// // function App() {
// //   return (
// //     // <Router>
// //     //   <Routes>
// //     //     <Route path="/" element={<Home />} /> 
// //     //     <Route path="/login" element={<Login />} />
// //     //     <Route path="/signup" element={<Signup />} />
// //     //     <Route path="/players" element={<Players />} />
// //     //     <Route path="/addPlayer" element={<Addplayer />} />
// //     //   </Routes>
// //     // </Router>
// //     <LoginRegister/>
   
// //   );
// // }

// // export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

import Home from "./components/Home"; // Correct import path
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Addplayer from "./components/AddPlayer/Addplayer";
import Players from "./components/PlayersPage/Players";
import LoginRegister from "./components/loginRegister/LoginRegister"; // Correct import path

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the LoginRegister component */}
        <Route path="/" element={<LoginRegister />} />

        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/players" element={<Players />} />
        <Route path="/addPlayer" element={<Addplayer />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

// import Home from "./components/Home";
// import Signup from "./components/SignUp/Signup";
// import Login from "./components/Login/Login";
// import Addplayer from "./components/AddPlayer/Addplayer";
// import Players from "./components/PlayersPage/Players";
// import LoginRegister from "./components/loginRegister/LoginRegister";
// import Navbar from "./components/Navbar/Navbar"; 

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Check authentication on load
//   }, []);

//   const handleLogin = (token) => {
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     sessionStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {isAuthenticated && <Navbar handleLogout={handleLogout} />}
//       <Routes>
//         {/* Login/Register Page */}
//         <Route path="/" element={<LoginRegister setIsAuthenticated={handleLogin} />} />

//         {/* Protected Routes (Only accessible if logged in) */}
//         <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
//         <Route path="/players" element={isAuthenticated ? <Players /> : <Navigate to="/" />} />
//         <Route path="/addPlayer" element={isAuthenticated ? <Addplayer /> : <Navigate to="/" />} />

//         {/* Public Routes */}
//         <Route path="/login" element={<Login setIsAuthenticated={handleLogin} />} />
//         <Route path="/signup" element={<Signup setIsAuthenticated={handleLogin} />} />

//         {/* Redirect unknown routes */}
//         <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
