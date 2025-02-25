
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

// import Home from "./components/Home"; // Correct import path
// import Signup from "./components/SignUp/Signup";
// import Login from "./components/Login/Login";
// import Addplayer from "./components/AddPlayer/Addplayer";
// import Players from "./components/PlayersPage/Players";
// import LoginRegister from "./components/loginRegister/LoginRegister"; // Correct import path

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Route for the LoginRegister component */}
//         <Route path="/" element={<LoginRegister />} />

//         {/* Other routes */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/players" element={<Players />} />
//         <Route path="/addPlayer" element={<Addplayer />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection

import Home from "./components/Home"; 
import Addplayer from "./components/AddPlayer/Addplayer";
import Players from "./components/PlayersPage/Players";
import LoginRegister from "./components/loginRegister/LoginRegister"; 

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if token exists
  return token ? children : <Navigate to="/" />; // Redirect to login if not authenticated
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginRegister />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/players" element={<ProtectedRoute><Players /></ProtectedRoute>} />
        <Route path="/addPlayer" element={<ProtectedRoute><Addplayer /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
