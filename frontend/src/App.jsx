// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly aliased import

// import Home from "./components/Home"; // Correct import path
// import Signup from "./components/SignUp/Signup";
// import Login from "./components/Login/Login";
// import Addplayer from "./components/AddPlayer/Addplayer";
// import Players from "./components/PlayersPage/Players";
// import loginRegister from "./components/loginRegister/LoginRegister";
// import LoginRegister from "./components/loginRegister/LoginRegister";

// function App() {
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path="/" element={<Home />} /> 
//     //     <Route path="/login" element={<Login />} />
//     //     <Route path="/signup" element={<Signup />} />
//     //     <Route path="/players" element={<Players />} />
//     //     <Route path="/addPlayer" element={<Addplayer />} />
//     //   </Routes>
//     // </Router>
//     <LoginRegister/>
   
//   );
// }

// export default App;
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