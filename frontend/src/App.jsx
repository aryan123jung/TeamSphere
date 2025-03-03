// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection

// import Home from "./components/Home"; 
// import Addplayer from "./components/AddPlayer/Addplayer";
// import Players from "./components/PlayersPage/Players";
// import LoginRegister from "./components/loginRegister/LoginRegister"; 
// import UpdatePlayer from "./components/UpdatePlayer/updatePlayer";
// import AddStat from "./components/AddStats/AddStat";
// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token"); // Check if token exists
//   return token ? children : <Navigate to="/" />; // Redirect to login if not authenticated
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<LoginRegister />} />

//         {/* Protected Routes */}
//         <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         <Route path="/players" element={<ProtectedRoute><Players /></ProtectedRoute>} />
//         <Route path="/addPlayer" element={<ProtectedRoute><Addplayer /></ProtectedRoute>} />
//         <Route path="/addStats" element={<ProtectedRoute><AddStat /></ProtectedRoute>} />
//         <Route path="/updatePlayer" element={<ProtectedRoute><UpdatePlayer /></ProtectedRoute>} /> {/* Protected route */}
//       </Routes>
//     </Router>
//     // <AddStats/>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addplayer from "./components/AddPlayer/Addplayer";
import Players from "./components/PlayersPage/Players";
import LoginRegister from "./components/loginRegister/LoginRegister";
import UpdatePlayer from "./components/UpdatePlayer/updatePlayer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/addPlayer" element={<Addplayer />} />
        <Route path="/updatePlayer" element={<UpdatePlayer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Remove this route */}
        {/* <Route path="/addStats" element={<AddStat />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
