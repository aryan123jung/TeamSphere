
// import React, { useState } from "react";
// import "./Addstat.css";
// import { ImCross } from "react-icons/im";
// import { createPlayerStats } from "../../api/api";

// const AddStat = ({ closeaddStats, setView }) => {
//   const [playerStats, setPlayerStats] = useState({
//     player_id: "",
//     batting_score: "",
//     bowling_score: "",
//     fielding_score: "",
//     fitness_score: "",
//     match_awareness_score: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPlayerStats({
//       ...playerStats,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send player stats to the backend
//     const response = await createPlayerStats(playerStats);

//     if (response) {
//       alert("Player stats added successfully!");
//       closeaddStats();  // Close the form after successful submission

//       // Change view to players after stats are added
//       setView("players"); // Show players list after adding stats
//     } else {
//       alert("Failed to add player stats.");
//     }
//   };

//   return (
//     <div className="add-player-stats_container">
//       <button className="close-btn" onClick={closeaddStats}>
//         <ImCross />
//       </button>
//       <form className="players_stats" onSubmit={handleSubmit}>
//         <h1 className="plaStat">Add Player Stats</h1>

//         <div className="playerId">
//           <label>Player ID</label>
//           <input
//             type="text"
//             placeholder="Enter Player ID"
//             name="player_id"
//             value={playerStats.player_id}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="batting">
//           <label>Batting</label>
//           <input
//             type="number"
//             placeholder="Rate batting (1-100)"
//             name="batting_score"
//             value={playerStats.batting_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="bowling">
//           <label>Bowling</label>
//           <input
//             type="number"
//             placeholder="Rate bowling (1-100)"
//             name="bowling_score"
//             value={playerStats.bowling_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="fielding">
//           <label>Fielding</label>
//           <input
//             type="number"
//             placeholder="Rate fielding (1-100)"
//             name="fielding_score"
//             value={playerStats.fielding_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="fitness">
//           <label>Fitness</label>
//           <input
//             type="number"
//             placeholder="Rate fitness (1-100)"
//             name="fitness_score"
//             value={playerStats.fitness_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="match-awareness">
//           <label>Match Awareness</label>
//           <input
//             type="number"
//             placeholder="Rate match awareness (1-100)"
//             name="match_awareness_score"
//             value={playerStats.match_awareness_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="add-button-stats">
//           Add Player Stats
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddStat;



















// import React, { useState } from "react";
// import "./Addstat.css";
// import { ImCross } from "react-icons/im";
// import { createPlayerStats, fetchPlayers } from "../../api/api"; // Import the API function

// const AddStat = ({ closeaddStats, setView, setPlayers }) => {
//   const [playerStats, setPlayerStats] = useState({
//     player_id: "",
//     batting_score: "",
//     bowling_score: "",
//     fielding_score: "",
//     fitness_score: "",
//     match_awareness_score: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPlayerStats({
//       ...playerStats,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await createPlayerStats(playerStats);

//     if (response) {
//       alert("Player stats added successfully!");
//       const updatedPlayers = await fetchPlayers(); // Fetch updated players
//       setPlayers(updatedPlayers); // Update players state
//       closeaddStats(); // Close the form
//       setView("players"); // Show players list
//     } else {
//       alert("Failed to add player stats.");
//     }
//   };

//   return (
//     <div className="add-player-stats_container">
//       <button className="close-btn" onClick={closeaddStats}>
//         <ImCross />
//       </button>
//       <form className="players_stats" onSubmit={handleSubmit}>
//         <h1 className="plaStat">Add Player Stats</h1>

//         <div className="playerId">
//           <label>Player ID</label>
//           <input
//             type="text"
//             placeholder="Enter Player ID"
//             name="player_id"
//             value={playerStats.player_id}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="batting">
//           <label>Batting</label>
//           <input
//             type="number"
//             placeholder="Rate batting (1-100)"
//             name="batting_score"
//             value={playerStats.batting_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="bowling">
//           <label>Bowling</label>
//           <input
//             type="number"
//             placeholder="Rate bowling (1-100)"
//             name="bowling_score"
//             value={playerStats.bowling_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="fielding">
//           <label>Fielding</label>
//           <input
//             type="number"
//             placeholder="Rate fielding (1-100)"
//             name="fielding_score"
//             value={playerStats.fielding_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="fitness">
//           <label>Fitness</label>
//           <input
//             type="number"
//             placeholder="Rate fitness (1-100)"
//             name="fitness_score"
//             value={playerStats.fitness_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="match-awareness">
//           <label>Match Awareness</label>
//           <input
//             type="number"
//             placeholder="Rate match awareness (1-100)"
//             name="match_awareness_score"
//             value={playerStats.match_awareness_score}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="add-button-stats">
//           Add Player Stats
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddStat;

// import React, { useState, useEffect } from "react";
// import "./Addstat.css";
// import { ImCross } from "react-icons/im";
// import { createPlayerStats, fetchPlayers } from "../../api/api"; // Import the API functions

// const AddStat = ({ closeaddStats, setView, setPlayers }) => {
//   const [playerStats, setPlayerStats] = useState({
//     player_id: "",
//     batting_score: "",
//     bowling_score: "",
//     fielding_score: "",
//     fitness_score: "",
//     match_awareness_score: "",
//   });

//   const [playersList, setPlayersList] = useState([]);

//   useEffect(() => {
//     // Fetch the players from the database when the component mounts
//     const getPlayers = async () => {
//       try {
//         const players = await fetchPlayers();
//         setPlayersList(players); // Set the players list
//       } catch (error) {
//         console.error("Error fetching players:", error);
//       }
//     };

//     getPlayers();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!playerStats.player_id) {
//       alert("Please select a player.");
//       return;
//     }

//     // Create player stats using the provided API function
//     try {
//       const newStats = await createPlayerStats(playerStats); // Add stats for the player
//       // Optionally, update the players' state after adding stats
//       const updatedPlayers = playersList.map(player =>
//         player.player_id === playerStats.player_id
//           ? { ...player, stats: newStats }
//           : player
//       );

//       setPlayers(updatedPlayers); // Update players state with the new stats
//       closeaddStats(); // Close the stats add modal
//     } catch (error) {
//       console.error("Error adding player stats:", error);
//     }
//   };

//   return (
//     <div className="add-stats-modal">
//       <div className="add-stats-content">
//         <h1>Add Player Stats</h1>
//         <button className="close-btn" onClick={closeaddStats}>
//           <ImCross />
//         </button>

//         <form onSubmit={handleSubmit}>
//           <label>Select Player</label>
//           <select
//             value={playerStats.player_id}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, player_id: e.target.value })
//             }
//           >
//             <option value="">Select a player</option>
//             {playersList.map((player) => (
//               <option key={player.player_id} value={player.player_id}>
//                 {player.name}
//               </option>
//             ))}
//           </select>

//           <label>Batting Score</label>
//           <input
//             type="number"
//             value={playerStats.batting_score}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, batting_score: e.target.value })
//             }
//           />

//           <label>Bowling Score</label>
//           <input
//             type="number"
//             value={playerStats.bowling_score}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, bowling_score: e.target.value })
//             }
//           />

//           <label>Fielding Score</label>
//           <input
//             type="number"
//             value={playerStats.fielding_score}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, fielding_score: e.target.value })
//             }
//           />

//           <label>Fitness Score</label>
//           <input
//             type="number"
//             value={playerStats.fitness_score}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, fitness_score: e.target.value })
//             }
//           />

//           <label>Match Awareness Score</label>
//           <input
//             type="number"
//             value={playerStats.match_awareness_score}
//             onChange={(e) =>
//               setPlayerStats({
//                 ...playerStats,
//                 match_awareness_score: e.target.value,
//               })
//             }
//           />

//           <button type="submit">Save Stats</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddStat;
// import React, { useState, useEffect } from "react";
// import "./Addstat.css";
// import PropTypes from "prop-types";

// import { ImCross } from "react-icons/im";
// import { createPlayerStats, fetchPlayers } from "../../api/api";

// const AddStat = ({ closeaddStats, setPlayers }) => {
//   console.log("setPlayers in AddStat:", setPlayers);
//   const [playerStats, setPlayerStats] = useState({
//     player_id: "",
//     batting_score: "",
//     bowling_score: "",
//     fielding_score: "",
//     fitness_score: "",
//     match_awareness_score: "",
//   });

//   const [playersList, setPlayersList] = useState([]);

//   // Fetch players list
//   useEffect(() => {
//     const getPlayers = async () => {
//       try {
//         const players = await fetchPlayers();
//         setPlayersList(players);
//       } catch (error) {
//         console.error("Error fetching players:", error);
//       }
//     };

//     getPlayers();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!playerStats.player_id) {
//       alert("Please select a player.");
//       return;
//     }

//     try {
//       const newStats = await createPlayerStats(playerStats);

//       // Update the players list in the parent component
//       if (typeof setPlayers === "function") {
//         setPlayers((prevPlayers) =>
//           prevPlayers.map((player) =>
//             player.player_id === playerStats.player_id
//               ? { ...player, stats: newStats }
//               : player
//           )
//         );
//       } else {
//         console.error("setPlayers is not a function, cannot update state");
//       }

//       closeaddStats(); // Close the modal after saving
//     } catch (error) {
//       console.error("Error adding player stats:", error);
//     }
//   };

//   return (
//     <div className="add-stats-modal">
//       <div className="add-stats-content">
//         <h1>Add Player Stats</h1>
//         <button className="close-btn" onClick={closeaddStats}>
//           <ImCross />
//         </button>

//         <form onSubmit={handleSubmit}>
//           <label>Select Player</label>
//           <select
//             value={playerStats.player_id}
//             onChange={(e) =>
//               setPlayerStats({ ...playerStats, player_id: e.target.value })
//             }
//           >
//             <option value="">Select a player</option>
//             {playersList.map((player) => (
//               <option key={player.player_id} value={player.player_id}>
//                 {player.name}
//               </option>
//             ))}
//           </select>

//           {['batting_score', 'bowling_score', 'fielding_score', 'fitness_score', 'match_awareness_score'].map((stat) => (
//             <React.Fragment key={stat}>
//               <label>{stat.replace("_", " ").toUpperCase()}</label>
//               <input
//                 type="number"
//                 value={playerStats[stat]}
//                 onChange={(e) =>
//                   setPlayerStats({ ...playerStats, [stat]: e.target.value })
//                 }
//               />
//             </React.Fragment>
//           ))}

//           <button type="submit">Save Stats</button>
//         </form>
//       </div>
//     </div>
//   );
// };AddStat.propTypes = {
//   closeaddStats: PropTypes.func.isRequired,
//   setPlayers: PropTypes.func.isRequired,
// };

// export default AddStat;







import React, { useState, useEffect } from "react";
import "./Addstat.css";
import { ImCross } from "react-icons/im";
import { createPlayerStats, fetchPlayers } from "../../api/api";
import PropTypes from "prop-types"; // Import PropTypes

const AddStat = ({ closeaddStats, setPlayers }) => {
  const [playerStats, setPlayerStats] = useState({
    player_id: "",
    batting_score: "",
    bowling_score: "",
    fielding_score: "",
    fitness_score: "",
    match_awareness_score: "",
  });

  const [playersList, setPlayersList] = useState([]);

  // Fetch players list
  useEffect(() => {
    const getPlayers = async () => {
      try {
        const players = await fetchPlayers();
        setPlayersList(players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    getPlayers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!playerStats.player_id) {
      alert("Please select a player.");
      return;
    }
  
    try {
      const newStats = await createPlayerStats(playerStats);
  
      // Update the players list in the parent component
      if (typeof setPlayers === "function") {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) =>
            player.player_id === playerStats.player_id
              ? { ...player, stats: newStats } // Update the player's stats
              : player
          )
        );
      } else {
        console.error("setPlayers is not a function, cannot update state");
      }
  
      closeaddStats(); // Close the modal after saving
    } catch (error) {
      console.error("Error adding player stats:", error);
    }
  };
  return (
    <div className="add-stats-modal">
      <div className="add-stats-content">
        <h1 className="uh">Add Player Stats</h1>
        <button className="close-btn" onClick={closeaddStats}>
          <ImCross />
        </button>

        <form onSubmit={handleSubmit}>
          <label>Select Player</label>
          <select
            value={playerStats.player_id}
            onChange={(e) =>
              setPlayerStats({ ...playerStats, player_id: e.target.value })
            }
          >
            <option value="">Select a player</option>
            {playersList.map((player) => (
              <option key={player.player_id} value={player.player_id}>
                {player.name}
              </option>
            ))}
          </select>

          {['batting_score', 'bowling_score', 'fielding_score', 'fitness_score', 'match_awareness_score'].map((stat) => (
            <React.Fragment key={stat}>
              <label>{stat.replace("_", " ").toUpperCase()}</label>
              <input
                type="number"
                value={playerStats[stat]}
                onChange={(e) =>
                  setPlayerStats({ ...playerStats, [stat]: e.target.value })
                }
              />
            </React.Fragment>
          ))}

          <button type="submit">Save Stats</button>
        </form>
      </div>
    </div>
  );
};

// Define prop types
AddStat.propTypes = {
  closeaddStats: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired, // Ensure setPlayers is required
};

export default AddStat;