import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

import Home from "./components/Home"; // Correct import path
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        {/* Uncomment when needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
