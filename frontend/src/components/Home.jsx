

// import React, { useState } from "react";
// import videoBg from "../assets/videoBg4.mp4";
// import "./home.css";
// import Navbar from "../components/Navbar/Navbar";

// import Players from "./PlayersPage/Players";
// import Addplayer from "./AddPlayer/Addplayer";
// import PlayerDetails from "./PlayersPage/PlayerDetails";
// // import Addplayer from "./AddPlayer/Addplayer"

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

//         {/* Conditional Rendering for Login, Signup, Players, or Add Player */}
//         {/* {view === "login" && (
//           <div className="dashboard">
//             <Login
//               closeLogin={() => setView(null)}
//               openSignup={() => setView("signup")}
//             />
//           </div>
//         )}
//         {view === "signup" && (
//           <div className="dashboard">
//             <Signup
//               closeSignup={() => setView(null)} // Close Signup
//               openLogin={() => setView("login")} // Open Login
//             />
//           </div>
//         )} */}
//         {view === "players" && (
//           <div className="dashboard">
//             <Players
//             closePlayers={() => setView(null)}
//             // openHome={() => setView("home")}
//              />
//           </div>
//         )}
//          {view === "playerDetails" && (
//           <div className="dashboard">
//             <PlayerDetails 
//              closePlayerDetails={() => setView(null)}
//              openPlayers={() => setView("players")}
//             />
//           </div>
//         )}


//         {view === "addPlayer" && (
//           <div className="dashboard">
//             <Addplayer 
//              closeaddPlayer={() => setView(null)}
//             //  openHome={() => setView("home")}
//             />
//           </div>
//         )}
//         {view === "aboutUs" && (
//           <div className="dashboard">
//             <h1>About Us</h1>
//             <p>This is the About Us page.</p>
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
import Players from "./PlayersPage/Players";
import Addplayer from "./AddPlayer/Addplayer";
import PlayerDetails from "./PlayersPage/PlayerDetails";

const Home = () => {
  const [view, setView] = useState(null);  // Manage which component to display
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Store player details

  return (
    <>
      <Navbar setView={setView} />
      <div className="main">
        <div className="video-section">
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          <div className="content">
            <h1>Welcome</h1>
            <p>To TeamSphere.</p> 
          </div>
        </div>

        {view === "players" && (
          <div className="dashboard">
            <Players 
              closePlayers={() => setView(null)}
              openPlayerDetails={(player) => {
                setSelectedPlayer(player);   // Store selected player
                setView("playerDetails");   // Open PlayerDetails
              }}
            />
          </div>
        )}

        {view === "playerDetails" && selectedPlayer && (
          <div className="dashboard">
            <PlayerDetails 
              player={selectedPlayer}  // Pass player data ✅
              closePlayerDetails={() => setView("players")}  // Return to Players page ✅
            />
          </div>
        )}

        {view === "addPlayer" && (
          <div className="dashboard">
            <Addplayer closeaddPlayer={() => setView(null)} />
          </div>
        )}

        {view === "aboutUs" && (
          <div className="dashboard">
            <h1>About Us</h1>
            <p>This is the About Us page.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
