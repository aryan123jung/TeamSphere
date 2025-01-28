
// import React, { useState } from "react";
// import videoBg from "../assets/videoBg4.mp4";
// import "./home.css";
// import Navbar from "../components/Navbar/Navbar";
// import Login from "../components/Login/Login";
// // import Signup from "../components/Signup/Signup";
// import Signup from "./SignUp/Signup";

// const Home = () => {
//   const [view, setView] = useState(null); // Manage which component to display

//   return (
//     <>
//       <Navbar setView={setView} /> {/* Pass setView as a prop */}
//       <div className="main">
//         <div className="video-section">
//           <div className="overlay"></div>
//           <video src={videoBg} autoPlay loop muted />
//           <div className="content">
//             <h1>Welcome</h1>
//             <p>To TeamSphere.</p>
//           </div>
//         </div>

//         {/* Conditional Rendering for Login or Signup */}
//         {view === "login" && (
//           <div className="dashboard">
//             <Login closeLogin={() => setView(null)} /> {/* Pass closeLogin */}
//           </div>
//         )}
//         {view === "signup" && (
//           <div className="dashboard">
//             <Signup closeSignup={() => setView(null)} /> {/* Pass closeSignup */}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState } from "react";
import videoBg from "../assets/videoBg4.mp4";
import "./home.css";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Signup from "./SignUp/Signup";

const Home = () => {
  const [view, setView] = useState(null); // Manage which component to display

  return (
    <>
      <Navbar setView={setView} /> {/* Pass setView as a prop */}
      <div className="main">
        <div className="video-section">
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          <div className="content">
            <h1>Welcome</h1>
            <p>To TeamSphere.</p>
          </div>
        </div>

        {/* Conditional Rendering for Login or Signup */}
        {view === "login" && (
          <div className="dashboard">
            <Login 
            closeLogin={() => setView(null)} 
            openSignup={() => setView("signup")}
            /> {/* Pass closeLogin */}
          </div>
        )}
        {view === "signup" && (
          <div className="dashboard">
            <Signup
              closeSignup={() => setView(null)} // Close Signup
              openLogin={() => setView("login")} // Open Login
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
