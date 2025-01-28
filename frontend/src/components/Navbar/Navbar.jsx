// // Navbar.js
// import React, { useState } from "react";
// import { Link,Navigate } from "react-router-dom"; // Import Link
// import "../Navbar/navbar.css";

// const Navbar = () => {
//   const [activePage, setActivePage] = useState(""); // State for active button

//   const handleNavigation = (page) => {
//     setActivePage(page);
//     console.log(`Navigated to ${page}`);
//   };

//   return (
//     <header className="header">
//       <div className="navbar-logo">
//         <img src="../src/assets/logo1.png" alt="logo" />
//       </div>
//       <Link
//         to="/login"
//         id="login-button"
//         className={activePage === "Login" ? "active" : ""}
//         onClick={() => handleNavigation("Login")}
//       >
//         Login
//       </Link>
//       <Link
//         to="/signup"
//         id="SignUp-button"
//         className={activePage === "SignUp" ? "active" : ""}
//         onClick={() => handleNavigation("SignUp")}
//       >
//         Sign-Up
//       </Link>
//       <Link
//         to="/" // Link to the Home page
//         id="Home-button"
//         className={activePage === "Home" ? "active" : ""}
//         onClick={() => handleNavigation("Home")}
//       >
//         Home
//       </Link>
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

      <button
        id="login-button"
        onClick={() => setView("login")}
        className="navbar-btn"
      >
        Login
      </button>

      <button
        id="SignUp-button"
        onClick={() => setView("signup")}
        className="navbar-btn"
      >
        Sign-Up
      </button>

      <button
        id="Home-button"
        onClick={() => setView(null)}
        className="navbar-btn"
      >
        Home
      </button>
      
    </header>
  );
};

export default Navbar;
