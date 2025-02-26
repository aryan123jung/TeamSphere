

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection

import Home from "./components/Home"; 
import Addplayer from "./components/AddPlayer/Addplayer";
import Players from "./components/PlayersPage/Players";
import LoginRegister from "./components/loginRegister/LoginRegister"; 
import UpdatePlayer from "./components/UpdatePlayer/updatePlayer";

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
    // <UpdatePlayer/>
  );
}

export default App;
