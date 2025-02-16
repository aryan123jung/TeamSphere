import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

import Home from "./components/Home"; // Correct import path
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Addplayer from "./components/AddPlayer/Addplayer";
import Players from "./components/PlayersPage/Players";
import ActiveSlider from "./components/Slider/ActiveSlider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        {/* Uncomment when needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/players" element={<Players />} />
        <Route path="/addPlayer" element={<Addplayer />} />
      </Routes>
    </Router>
    // <ActiveSlider/>
  );
}

export default App;
