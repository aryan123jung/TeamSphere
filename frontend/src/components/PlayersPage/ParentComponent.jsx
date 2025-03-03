

// import React, { useState } from "react";
// import Players from "./Players";
// import Addplayer from "./Addplayer";
// import AddStat from "./AddStat";
// import { updatePlayerStats, deletePlayer, fetchPlayers } from "../../api/api"; // Import API functions


// const ParentComponent = () => {
//   const [view, setView] = useState("players");
//   const [players, setPlayers] = useState([]);
 


//   // Function to update player stats
//   const handleUpdatePlayerStats = async (playerId, stats) => {
//     const response = await updatePlayerStats(playerId, stats);
//     if (response) {
//       // Fetch updated players list
//       const updatedPlayers = await fetchPlayers();
//       setPlayers(updatedPlayers);
//     }
//     console.log("updatePlayerStats:", updatePlayerStats);

//   };

//   // Function to delete a player
//   const handleDeletePlayer = async (playerId) => {
//     const response = await deletePlayer(playerId);
//     if (response) {
//       // Fetch updated players list
//       const updatedPlayers = await fetchPlayers();
//       setPlayers(updatedPlayers);
//     }
//     console.log("deletePlayer:", deletePlayer);
//   };

//   return (
//     <>
//       {view === "players" && (
//         <Players
//           closePlayers={() => setView("home")}
//           updatePlayerStats={handleUpdatePlayerStats} // Pass updatePlayerStats
//           deletePlayer={handleDeletePlayer} // Pass deletePlayer
//         />
//       )}
//       {view === "addPlayer" && (
//         <Addplayer
//           closeaddPlayer={() => setView("players")}
//           setView={setView}
//           setPlayers={setPlayers}
//         />
//       )}
//       {view === "addStats" && (
//         <AddStat
//           closeaddStats={() => setView("players")}
//           setView={setView}
//           setPlayers={setPlayers}
//         />
//       )}
//     </>
//   );
// };

// export default ParentComponent;
import React, { useState, useEffect } from "react";
import Players from "./Players";
import Addplayer from "./Addplayer";
import AddStat from "./AddStat";
import { updatePlayerStats, deletePlayer, fetchPlayers } from "../../api/api";

const ParentComponent = () => {
    console.log("setPlayers in ParentComponent:", setPlayers);
  const [view, setView] = useState("players"); // Default view should be "players"
  const [players, setPlayers] = useState([]); // Correct state definition

  // Fetch players on mount
  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };

    getPlayers();
  }, []); // Empty dependency array to run only once when the component mounts

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
      {view === "players" && (
        <Players
          closePlayers={() => setView("home")}
          updatePlayerStats={handleUpdatePlayerStats}
          deletePlayer={handleDeletePlayer}
        />
      )}
      {view === "addPlayer" && (
        <Addplayer
          closeaddPlayer={() => setView("players")}
          setView={setView}
          setPlayers={setPlayers} // Pass setPlayers
        />
      )}
      {view === "addStats" && (
        <AddStat
          closeaddStats={() => setView("players")} // Close AddStat and go back to players
          setPlayers={setPlayers} // Pass setPlayers
        />
      )}
    </>
  );
};

export default ParentComponent;