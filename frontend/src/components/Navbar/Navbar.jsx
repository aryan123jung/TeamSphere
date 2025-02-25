
// import React from "react";
// import "../Navbar/navbar.css";

// const Navbar = ({ setView }) => {
//   return (
//     <header className="header">
//       <div className="navbar-logo">
//         <img src="../src/assets/nm.png" alt="logo" />
//       </div>

//       {/* Players Button */}
//       <button
//         id="Players-button"
//         onClick={() => setView("players")}
//         className="navbar-btn"
//       >
//         Players
//       </button>

//       {/* Add Player Button */}
//       <button
//         id="AddPlayer-button"
//         onClick={() => setView("addPlayer")}
//         className="navbar-btn"
//       >
//         Add Player
//       </button>

//       {/* About Us Button */}
//       <button
//         id="AboutUs-button"
//         onClick={() => setView("aboutUs")}
//         className="navbar-btn"
//       >
//         About Us
//       </button>

//       {/* Home Button */}
//       <button
//         id="Home-button"
//         onClick={() => setView(null)}
//         className="navbar-btn"
//       >
//         Home
//       </button>

//         {/* Logout Button */}
//         <button
//         id="Logout-button"
//         onClick={() => setView("")}
//         className="navbar-btn"
//       >
//         Logout
//       </button>

//     </header>
//   );
// };

// export default Navbar;


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Navbar/navbar.css";

const Navbar = ({ setView }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle logout with confirmation
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      localStorage.removeItem("token"); // Remove token from localStorage
      navigate("/"); // Redirect to login page
    }
  };

  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="../src/assets/nm.png" alt="logo" />
      </div>
      

      {/* Players Button */}
      <button
        id="Players-button"
        onClick={() => setView("players")}
        className="navbar-btn"
      >
        Players
      </button>

      {/* Add Player Button */}
      <button
        id="AddPlayer-button"
        onClick={() => setView("addPlayer")}
        className="navbar-btn"
      >
        Add Player
      </button>

      {/* About Us Button */}
      <button
        id="AboutUs-button"
        onClick={() => setView("aboutUs")}
        className="navbar-btn"
      >
        About Us
      </button>

      {/* Home Button */}
      <button
        id="Home-button"
        onClick={() => setView(null)}
        className="navbar-btn"
      >
        Home
      </button>

      {/* Logout Button */}
      <button id="Logout-button" onClick={handleLogout} className="navbar-btn">
        Logout
      </button>
    </header>
  );
};

export default Navbar;
