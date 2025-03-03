










// import React, { useState } from "react";
// import "./home.css";
// import Navbar from "../components/Navbar/Navbar";
// import Players from "./PlayersPage/Players";
// import Addplayer from "./AddPlayer/Addplayer";
// import PlayerDetails from "./PlayersPage/PlayerDetails";
// import AddStat from "./AddStats/AddStat";
// import aksh from "../assets/aksh.jpg";

// const Home = () => {
//   const [view, setView] = useState(null);  // Manage which component to display
//   const [selectedPlayer, setSelectedPlayer] = useState(null); // Store player details
  
//   return (
//     <>
//       <Navbar setView={setView} />
//       <div className="main">
//         <div className="video-section">
//           <div className="overlay"></div>
//           <img src={aksh} alt="Background" className="background-image" />
//           <div className="content">
//             <h1>Welcome</h1>
//             <p>To TeamSphere.</p>
//           </div>
//         </div>

//         {/* Button to show the Add Stats form */}
//         <button onClick={() => setView("addStats")} className="add-stats-btn">
//           Add Stats
//         </button>

//         {/* Conditional rendering of components */}
//         {view === "players" && (
//           <div className="dashboard">
//             <Players
//               closePlayers={() => setView(null)}
//               openPlayerDetails={(player) => {
//                 setSelectedPlayer(player);   // Store selected player
//                 setView("playerDetails");   // Open PlayerDetails
//               }}
//             />
//           </div>
//         )}

//         {view === "playerDetails" && selectedPlayer && (
//           <div className="dashboard">
//             <PlayerDetails 
//               player={selectedPlayer}  // Pass player data
//               closePlayerDetails={() => setView("players")}  // Return to Players page
//             />
//           </div>
//         )}

//         {/* Show Add Stat Form */}
//         {view === "addStats" && (
//           <div className="dashboard">
//             <AddStat setView={setView} closeaddStats={() => setView(null)} />
//           </div>
//         )}

//         {/* Show Add Player Form */}
//         {view === "addPlayer" && (
//           <div className="dashboard">
//             <Addplayer setView={setView} closeaddPlayer={() => setView(null)} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import "./home.css";
// import Navbar from "../components/Navbar/Navbar";
// import Players from "./PlayersPage/Players";
// import Addplayer from "./AddPlayer/Addplayer";
// import PlayerDetails from "./PlayersPage/PlayerDetails";
// import AddStat from "./AddStats/AddStat";
// import aksh from "../assets/aksh.jpg";

// const Home = () => {
//   const [view, setView] = useState(null);  // Manage which component to display
//   const [selectedPlayer, setSelectedPlayer] = useState(null); // Store player details
//   const [players, setPlayers] = useState([]); // Add players state

//   return (
//     <>
//       <Navbar setView={setView} />
//       <div className="main">
//         <div className="video-section">
//           <div className="overlay"></div>
//           <img src={aksh} alt="Background" className="background-image" />
//           <div className="content">
//             <h1>Welcome</h1>
//             <p>To TeamSphere.</p>
//           </div>
//         </div>

//         {/* Button to show the Add Stats form */}
//         <button onClick={() => setView("addStats")} className="add-stats-btn">
//           Add Stats
//         </button>

//         {/* Conditional rendering of components */}
//         {view === "players" && (
//           <div className="dashboard">
//             <Players
//               closePlayers={() => setView(null)}
//               openPlayerDetails={(player) => {
//                 setSelectedPlayer(player);   // Store selected player
//                 setView("playerDetails");   // Open PlayerDetails
//               }}
//               players={players} // Pass players state
//               setPlayers={setPlayers} // Pass setPlayers function
//             />
//           </div>
//         )}

//         {/* {view === "playerDetails" && selectedPlayer && (
//           <div className="dashboard">
//             <PlayerDetails 
//               player={selectedPlayer}  // Pass player data
//               closePlayerDetails={() => setView("players")}  // Return to Players page
//             />
//           </div>
//         )} */}

//         {view === "playerDetails" && selectedPlayer && (
//           <div className="dashboard">
//             <PlayerDetails 
//             player={selectedPlayer}  // Pass player data
//             closePlayerDetails={() => setView("players")}  // Return to Players page
//             updatePlayerStats={handleUpdatePlayerStats} // Pass updatePlayerStats function
//             deletePlayer={handleDeletePlayer} // Pass deletePlayer function
//             />
//           </div>
//         )}

//         {/* Show Add Stat Form */}
//         {view === "addStats" && (
//           <div className="dashboard">
//             <AddStat
//               setView={setView}
//               closeaddStats={() => setView(null)}
//               setPlayers={setPlayers} // Pass setPlayers function
//             />
//           </div>
//         )}

//         {/* Show Add Player Form */}
//         {view === "addPlayer" && (
//           <div className="dashboard">
//             <Addplayer
//               setView={setView}
//               closeaddPlayer={() => setView(null)}
//               setPlayers={setPlayers} // Pass setPlayers function
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import "./home.css";
import Navbar from "../components/Navbar/Navbar";
import Players from "./PlayersPage/Players";
import Addplayer from "./AddPlayer/Addplayer";
import PlayerDetails from "./PlayersPage/PlayerDetails";
import AddStat from "./AddStats/AddStat";
import aksh from "../assets/aksh.jpg";
import { updatePlayerStats, deletePlayer, fetchPlayers } from "../api/api"; // Import API functions
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  const [view, setView] = useState(null);  // Manage which component to display
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Store player details
  const [players, setPlayers] = useState([]); // Add players state

  // Fetch players on mount
  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };

    getPlayers();
  }, []);

  // Function to update player stats
  const handleUpdatePlayerStats = async (playerId, stats) => {
    const response = await updatePlayerStats(playerId, stats);
    if (response) {
      // Fetch updated players list
      const updatedPlayers = await fetchPlayers();
      setPlayers(updatedPlayers);
    }
  };

  // Function to delete a player
  const handleDeletePlayer = async (playerId) => {
    const response = await deletePlayer(playerId);
    if (response) {
      // Fetch updated players list
      const updatedPlayers = await fetchPlayers();
      setPlayers(updatedPlayers);
    }
  };

  return (
    <>
      <Navbar setView={setView} />
      <div className="main">
        <div className="video-section">
          <div className="overlay"></div>
          <img src={aksh} alt="Background" className="background-image" />
          <div className="content">
            <h1 className="mn">Welcome</h1>
            <p>To TeamSphere.</p>
          </div>
        </div>

        {/* Button to show the Add Stats form */}
        <button onClick={() => setView("addStats")} className="add-stats-btn">
          Add Stats
        </button>

        {/* Conditional rendering of components */}
        {view === "players" && (
          <div className="dashboard">
            <Players
              closePlayers={() => setView(null)}
              openPlayerDetails={(player) => {
                setSelectedPlayer(player);   // Store selected player
                setView("playerDetails");   // Open PlayerDetails
              }}
              players={players} // Pass players state
              setPlayers={setPlayers} // Pass setPlayers function
            />
          </div>
        )}

       {view === "playerDetails" && selectedPlayer && (
  <div className="dashboard">
    <PlayerDetails 
      player={selectedPlayer}  // Pass player data
      closePlayerDetails={() => setView("players")}  // Return to Players page
      updatePlayerStats={handleUpdatePlayerStats} // Pass updatePlayerStats function
      deletePlayer={handleDeletePlayer} // Pass deletePlayer function
    />
  </div>
)}
        {/* Show Add Stat Form */}
        {view === "addStats" && (
          <div className="dashboard">
            <AddStat
              setView={setView}
              closeaddStats={() => setView(null)}
              setPlayers={setPlayers} // Pass setPlayers function
            />
          </div>
        )}

        {/* Show Add Player Form */}
        {view === "addPlayer" && (
          <div className="dashboard">
            <Addplayer
              setView={setView}
              closeaddPlayer={() => setView(null)}
              setPlayers={setPlayers} // Pass setPlayers function
            />
          </div>
        )}


          {view === "aboutus" && (
          <div className="dashboard">
            <AboutUs
              setView={setView}
              closeaboutus={() => setView(null)}
             
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;