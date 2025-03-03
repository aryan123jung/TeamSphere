

import React, { useState, useEffect } from "react";
import './PlayerDetails.css';
import { ImCross } from "react-icons/im";
import { Chart as ChartJS, CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController);

const PlayerDetails = ({ player, closePlayerDetails, updatePlayerStats, deletePlayer }) => {
  console.log("Player object in PlayerDetails:", player); // ✅ Log player object

  if (!player) {
    console.error("Error: Player object is undefined!");
    return null;
  }

  const [chartInstance, setChartInstance] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedStats, setUpdatedStats] = useState({
    batting: player.stats?.batting || 0,
    bowling: player.stats?.bowling || 0,
    fielding: player.stats?.fielding || 0,
    fitness: player.stats?.fitness || 0,
    matchAwareness: player.stats?.matchAwareness || 0,
  });

  // Reset updatedStats when player prop changes
  useEffect(() => {
    setUpdatedStats({
      batting: player.stats?.batting || 0,
      bowling: player.stats?.bowling || 0,
      fielding: player.stats?.fielding || 0,
      fitness: player.stats?.fitness || 0,
      matchAwareness: player.stats?.matchAwareness || 0,
    });
  }, [player]);

  const stats = player.stats || {
    batting: 0,
    bowling: 0,
    fielding: 0,
    fitness: 0,
    matchAwareness: 0
  };

  const data = {
    labels: ["Batting", "Bowling", "Fielding", "Fitness", "Match Awareness"],
    datasets: [
      {
        label: "Player Stats",
        data: [
          stats.batting, 
          stats.bowling, 
          stats.fielding, 
          stats.fitness, 
          stats.matchAwareness
        ],
        backgroundColor: "rgba(0, 255, 128, 0.2)", 
        borderColor: "rgb(255, 255, 255)", 
        borderWidth: 1,
        pointBackgroundColor: "rgba(54, 162, 235, 1)", 
        pointBorderColor: "#fff", 
        pointHoverBackgroundColor: "#fff", 
        pointHoverBorderColor: "rgba(54, 162, 235, 1)", 
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(239, 203, 203, 0.2)", 
          lineWidth: 2, 
        },
        grid: {
          color: "rgba(236, 236, 236, 0.8)", 
          lineWidth: 1, 
        },
        pointLabels: {
          color: "white", 
          font: {
            size: 14, 
          },
        },
        ticks: {
          color: "green", 
          backdropColor: "transparent", 
        },
      },
    },
  };

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); 
    }

    const newChartInstance = new ChartJS(document.getElementById("playerChart"), {
      type: "radar",
      data: data,
      options: options, 
    });

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [player]); // Re-render chart when player prop changes

  const handleEditStats = () => {
    setIsEditing(true);
  };

  const handleSaveStats = async () => {
    console.log("Player ID:", player.id); // ✅ Log player ID
    console.log("Updated Stats:", updatedStats); // ✅ Log updated stats

    if (!player.id) {
      console.error("Error: Player ID is undefined!");
      return;
    }

    try {
      await updatePlayerStats(player.id, updatedStats); // Use updatePlayerStats
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating player stats:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = parseInt(value, 10);
    setUpdatedStats({
      ...updatedStats,
      [name]: isNaN(parsedValue) ? 0 : parsedValue, // Ensure valid number
    });
  };

  const handleDeletePlayer = async () => {
    console.log("Deleting player with ID:", player.player_id); // ✅ Log correct ID
  
    if (!player.player_id) {
      console.error("Error: Player ID is missing!");
      return;
    }
  
    if (window.confirm("Are you sure you want to delete this player?")) {
      try {
        await deletePlayer(player.player_id); // ✅ Pass correct ID
        closePlayerDetails();
      } catch (error) {
        console.error("Error deleting player:", error);
      }
    }
  };

  return (
    <div className="player-details-modal">
      <div className="player-details-content">
        <h1 className="tt">Player Details:</h1>
        <button className="close-btn" onClick={closePlayerDetails}> 
          <ImCross />
        </button>

        <img
          src={player.photo || "/fallback-image.png"} // Use a local fallback image
          alt={`${player.name}`}
          className="player-photo"
        />
        <div className="player-info">
          <p>Name: {player.name}</p> 
          <p>ID: {player.id}</p>
          <p>Age: {player.age}</p>
          <p>Nationality: {player.nationality}</p>
          <p>Category: {player.category}</p>
          <div className="vertical-line"></div>
        </div>

        <div className="spider-chart">
          <h2>Spider-Chart</h2>
          <canvas id="playerChart"></canvas>
        </div>

        {isEditing ? (
          <div className="edit-stats-form">
            <h3>Edit Stats</h3>
            <label>Batting</label>
            <input
              type="number"
              name="batting"
              value={updatedStats.batting}
              onChange={handleChange}
            />
            <label>Bowling</label>
            <input
              type="number"
              name="bowling"
              value={updatedStats.bowling}
              onChange={handleChange}
            />
            <label>Fielding</label>
            <input
              type="number"
              name="fielding"
              value={updatedStats.fielding}
              onChange={handleChange}
            />
            <label>Fitness</label>
            <input
              type="number"
              name="fitness"
              value={updatedStats.fitness}
              onChange={handleChange}
            />
            <label>Match Awareness</label>
            <input
              type="number"
              name="matchAwareness"
              value={updatedStats.matchAwareness}
              onChange={handleChange}
            />
            <button onClick={handleSaveStats}>Save</button>
          </div>
        ) : (
            <button className="edit-stats-btn" onClick={handleEditStats}>
            Edit Stats
            </button>
        )}

          {/* <button className="delete-btn" onClick={handleDeletePlayer}>
          Delete Player
          </button> */}
      </div>
    </div>
  );
};

export default PlayerDetails;


// import React, { useState, useEffect } from "react";
// import './PlayerDetails.css';
// import { ImCross } from "react-icons/im";
// import { Chart as ChartJS, CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController } from "chart.js";

// // Register necessary components for Chart.js
// ChartJS.register(CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController);

// const PlayerDetails = ({ player, closePlayerDetails }) => {  // ✅ Accept closePlayerDetails prop
//   const [chartInstance, setChartInstance] = useState(null);




//   const data = {
//     labels: ["Batting", "Bowling", "Fielding", "Fitness", "Match Awareness"],
//     datasets: [
//       {
//         label: "Player Stats",
//         data: [
//           player.batting, 
//           player.bowling, 
//           player.fielding, 
//           player.fitness, 
//           player.matchAwareness
//         ],
//         backgroundColor: "rgba(0, 255, 128, 0.2)", 
//         borderColor: "rgb(255, 255, 255)", 
//         borderWidth: 1,
//         pointBackgroundColor: "rgba(54, 162, 235, 1)", 
//         pointBorderColor: "#fff", 
//         pointHoverBackgroundColor: "#fff", 
//         pointHoverBorderColor: "rgba(54, 162, 235, 1)", 
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       r: {
//         angleLines: {
//           color: "rgba(239, 203, 203, 0.2)", 
//           lineWidth: 2, 
//         },
//         grid: {
//           color: "rgba(236, 236, 236, 0.8)", 
//           lineWidth: 1, 
//         },
//         pointLabels: {
//           color: "white", 
//           font: {
//             size: 14, 
//           },
//         },
//         ticks: {
//           color: "green", 
//           backdropColor: "transparent", 
//         },
//       },
//     },
//   };




//   useEffect(() => {
//     if (chartInstance) {
//       chartInstance.destroy(); 
//     }

//     const newChartInstance = new ChartJS(document.getElementById("playerChart"), {
//       type: "radar",
//       data: data,
//       options: options, 
//     });

//     setChartInstance(newChartInstance);

//     return () => {
//       if (newChartInstance) {
//         newChartInstance.destroy();
//       }
//     };
//   }, [player]);




//   return (
//     <div className="player-details-modal">
//       <div className="player-details-content">
//         <h1>Player Details:</h1>
//         <button className="close-btn" onClick={closePlayerDetails}>  {/* ✅ Calls closePlayerDetails */}
//           <ImCross />
//         </button>

//         <img src={player.photo} alt={`${player.name}`} className="player-photo" />
//         <div className="player-info">
//           <p>Name: {player.name}</p> 
//           <p>ID: {player.id}</p>
//           <p>Age: {player.age}</p>
//           <p>Nationality: {player.nationality}</p>
//           <p>Category: {player.category}</p>
//           <div className="vertical-line"></div>
//         </div>

//         <div className="spider-chart">
//           <h2>Spider-Chart</h2>
//           <canvas id="playerChart"></canvas>
//         </div>

//         <div className="update_button">
//           <button className="update">
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerDetails;