// import React, { useState, useEffect } from "react";
// import './PlayerDetails.css'; // Make sure the path is correct
// import { Radar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController } from "chart.js";

// // Register necessary components for chart.js
// ChartJS.register(CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController);

// const PlayerDetails = ({ player, closePlayerDetails }) => {
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
//         // backgroundColor: "rgba(255, 0, 55, 0.2)",
//         // borderColor: "rgba(255, 99, 132, 1)",
//         backgroundColor: "rgba(0, 255, 128, 0.2)", // Light blue background
//         borderColor: "rgb(255, 255, 255)", // Blue border
//         borderWidth: 1,
//         pointBackgroundColor: "rgba(54, 162, 235, 1)", // Blue data points
//         pointBorderColor: "#fff", // White border for data points
//         pointHoverBackgroundColor: "#fff", // White background on hover
//         pointHoverBorderColor: "rgba(54, 162, 235, 1)", // Blue border on hover
//       },
//     ],
//   };

//   useEffect(() => {
//     if (chartInstance) {
//       chartInstance.destroy(); // Destroy the previous chart instance before creating a new one
//     }

//     const newChartInstance = new ChartJS(document.getElementById("playerChart"), {
//       type: "radar",
//       data: data,
//     });

//     setChartInstance(newChartInstance);

//     // Cleanup the chart instance when the component is unmounted
//     return () => {
//       if (newChartInstance) {
//         newChartInstance.destroy();
//       }
//     };
//   }, [player]);

//   return (
//     <div className="player-details-modal">
//       <div className="player-details-content">
//         <h1>Players Details:</h1>
//         <button className="close-btn" onClick={closePlayerDetails}>X</button>
//         {/* <h2>{player.name}</h2> */}
//         <img src={player.photo} alt={`${player.name}`} className="player-photo" />
        
//         <div className="player-info">
//           <p>Name:{player.name}</p> 
//           <p>ID: {player.id}</p>
//           <p>Age: {player.age}</p>
//           <p>Nationality: {player.nationality}</p>
//           <p>Category: {player.category}</p>
//         </div>

//         <div class="vertical-line"></div>
      
//         <div className="spider-chart">
//         <h2>Spider-Chart</h2>
//           <canvas id="playerChart"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerDetails;






import React, { useState, useEffect } from "react";
import './PlayerDetails.css'; // Make sure the path is correct
import { Radar } from "react-chartjs-2";
import { ImCross } from "react-icons/im";

import { Chart as ChartJS, CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController } from "chart.js";

// Register necessary components for chart.js
ChartJS.register(CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadarController);

const PlayerDetails = ({ player, closePlayerDetails }) => {
  const [chartInstance, setChartInstance] = useState(null);

  const data = {
    labels: ["Batting", "Bowling", "Fielding", "Fitness", "Match Awareness"],
    datasets: [
      {
        label: "Player Stats",
        data: [
          player.batting, 
          player.bowling, 
          player.fielding, 
          player.fitness, 
          player.matchAwareness
        ],
        backgroundColor: "rgba(0, 255, 128, 0.2)", // Light blue background
        borderColor: "rgb(255, 255, 255)", // Blue border
        borderWidth: 1,
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Blue data points
        pointBorderColor: "#fff", // White border for data points
        pointHoverBackgroundColor: "#fff", // White background on hover
        pointHoverBorderColor: "rgba(54, 162, 235, 1)", // Blue border on hover
      },
    ],
  };

  // Options for customizing the web-like lines (axis and grid lines)
  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(239, 203, 203, 0.2)", // Color of the axis lines (web-like lines)
          lineWidth: 2, // Thickness of the axis lines
        },
        grid: {
          color: "rgba(236, 236, 236, 0.8)", // Color of the grid lines (web-like lines)
          lineWidth: 1, // Thickness of the grid lines
        },
        pointLabels: {
          color: "white", // Color of the labels (e.g., "Batting", "Bowling", etc.)
          font: {
            size: 14, // Font size of the labels
          },
        },
        ticks: {
          color: "green", // Color of the tick labels (e.g., numbers on the axes)
          backdropColor: "transparent", // Background color of the tick labels
        },
      },
    },
  };

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the previous chart instance before creating a new one
    }

    const newChartInstance = new ChartJS(document.getElementById("playerChart"), {
      type: "radar",
      data: data,
      options: options, // Apply the customized options here
    });

    setChartInstance(newChartInstance);

    // Cleanup the chart instance when the component is unmounted
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [player]);

  return (
    <div className="player-details-modal">
      <div className="player-details-content">

        <h1>Players Details:</h1>
        <button className="close-btn" onClick={closePlayerDetails}>
           <ImCross />
        </button>
        {/* <h2>{player.name}</h2> */}
        <img src={player.photo} alt={`${player.name}`} className="player-photo" />
        <div className="player-info">
          <p>Name:{player.name}</p> 
          <p>ID: {player.id}</p>
          <p>Age: {player.age}</p>
          <p>Nationality: {player.nationality}</p>
          <p>Category: {player.category}</p>
          <div class="vertical-line"></div>

        </div>

      
        <div className="spider-chart">
        <h2>Spider-Chart</h2>
          <canvas id="playerChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;













// // // Prop validation
// // PlayerDetails.propTypes = {
// //   player: PropTypes.shape({
// //     id: PropTypes.number.isRequired,
// //     name: PropTypes.string.isRequired,
// //     photo: PropTypes.string.isRequired,
// //     age: PropTypes.number.isRequired,
// //     nationality: PropTypes.string.isRequired,
// //     category: PropTypes.string.isRequired,
// //     batting: PropTypes.number.isRequired,
// //     bowling: PropTypes.number.isRequired,
// //     fielding: PropTypes.number.isRequired,
// //     fitness: PropTypes.number.isRequired,
// //     matchAwareness: PropTypes.number.isRequired,
// //   }).isRequired,
// //   closePlayerDetails: PropTypes.func.isRequired,
// // };

// // export default PlayerDetails;
