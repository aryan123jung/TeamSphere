
// import React from "react";
// import "../Navbar/navbar.css";
// import PlayersPage from "../PlayersPage/PlayersPage";

// const Navbar = ({ setView }) => {
//   return (
//     <header className="header">
//       <div className="navbar-logo">
//         <img src="../src/assets/logo1.png" alt="logo" />
//       </div>

//       <button
//         id="login-button"
//         onClick={() => setView("login")}
//         className="navbar-btn"
//       >
//         Login
//       </button>

//       <button
//         id="SignUp-button"
//         onClick={() => setView("signup")}
//         className="navbar-btn"
//       >
//         Sign-Up
//       </button>

//       <button
//         id="Home-button"
//         onClick={() => setView(null)}
//         className="navbar-btn"
//       >
//         Home
//       </button>

//       <button
//         id="AboutUs-button"
//         onClick={() => setView("PlayersPage")}
//         className="navbar-btn"
//       >
//         About Us
//       </button>

//       <button
//         id="AddPlayer-button"
//         onClick={() => setView(null)}
//         className="navbar-btn"
//       >
//         Add Player
//       </button>

//       <button
//         id="Players-button"
//         onClick={() => setView(null)}
//         className="navbar-btn"
//       >
//         Players
//       </button>
      
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import "../Navbar/navbar.css";

const Navbar = ({ setView }) => {
  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="../src/assets/logo1.png" alt="logo" />
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

      {/* Sign-Up Button */}
      {/* <button
        id="SignUp-button"
        onClick={() => setView("signup")}
        className="navbar-btn"
      >
        Sign-Up
      </button> */}

      {/* Login Button */}
      {/* <button
        id="login-button"
        onClick={() => setView("login")}
        className="navbar-btn"
      >
        Login
      </button> */}
    </header>
  );
};

export default Navbar;