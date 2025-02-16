

// const AddPlayer = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     age: "",
//     nationality: "Australian",
//     category: "Batsman",
//     photo: null,
//     skills: {
//       batting: 50,
//       bowling: 50,
//       fielding: 50,
//       fitness: 50,
//       matchAwareness: 50,
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSkillChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       skills: { ...formData.skills, [name]: parseInt(value) },
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/players", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert("Player added successfully!");
//         setFormData({
//           id: "",
//           name: "",
//           age: "",
//           nationality: "Australian",
//           category: "Batsman",
//           photo: null,
//           skills: {
//             batting: 50,
//             bowling: 50,
//             fielding: 50,
//             fitness: 50,
//             matchAwareness: 50,
//           },
//         });
//       } else {
//         alert("Failed to add player.");
//       }
//     } catch (error) {
//       console.error("Error adding player:", error);
//     }
//   };

//   // Render spider chart preview
//   useEffect(() => {
//     const ctx = document.getElementById("skillChart").getContext("2d");
//     const chart = new Chart(ctx, {
//       type: "radar",
//       data: {
//         labels: ["Batting", "Bowling", "Fielding", "Fitness", "Match Awareness"],
//         datasets: [
//           {
//             label: "Skills",
//             data: [
//               formData.skills.batting,
//               formData.skills.bowling,
//               formData.skills.fielding,
//               formData.skills.fitness,
//               formData.skills.matchAwareness,
//             ],
//             backgroundColor: "rgba(127, 255, 0, 0.2)",
//             borderColor: "#7FFF00",
//             borderWidth: 2,
//           },
//         ],
//       },
//       options: {
//         scale: {
//           ticks: {
//             beginAtZero: true,
//             max: 100,
//           },
//         },
//       },
//     });

//     return () => chart.destroy(); // Cleanup chart on unmount
//   }, [formData.skills]);

//   return (
//     <div className="add-player-page">
//       <h1>Add Player</h1>
//       <form onSubmit={handleSubmit} className="add-player-form">
//         <label>
//           ID:
//           <input type="text" name="id" value={formData.id} onChange={handleChange} required />
//         </label>

//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>

//         <label>
//           Age:
//           <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </label>

//         <label>
//           Nationality:
//           <select name="nationality" value={formData.nationality} onChange={handleChange}>
//             <option value="Australian">Australian</option>
//             <option value="English">English</option>
//             <option value="Indian">Indian</option>
//           </select>
//         </label>

//         <label>
//           Category:
//           <select name="category" value={formData.category} onChange={handleChange}>
//             <option value="Batsman">Batsman</option>
//             <option value="Bowler">Bowler</option>
//             <option value="All-rounder">All-rounder</option>
//           </select>
//         </label>

//         <label>
//           Photo:
//           <input type="file" name="photo" onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })} />
//         </label>

//         <h3>Skills</h3>
//         {Object.keys(formData.skills).map((skill) => (
//           <label key={skill}>
//             {skill.charAt(0).toUpperCase() + skill.slice(1)}:
//             <input
//               type="range"
//               name={skill}
//               value={formData.skills[skill]}
//               min="0"
//               max="100"
//               onChange={handleSkillChange}
//             />
//             <span>{formData.skills[skill]}</span>
//           </label>
//         ))}

//         <div className="spider-chart-preview">
//           <canvas id="skillChart"></canvas>
//         </div>

//         <button type="submit">Add Player</button>
//       </form>
//     </div>
//   );
// };

// export default AddPlayer;
import React, { useState } from "react";
// import { Chart } from "chart.js";
import "./addPlayer.css"; 


const Addplayer = () => {
  const [addPlayer, setPlayers] = useState([]);
  return (
    <div className='add-container'>
      <h1 className="topic">Addplayer</h1>

      <div className='input-box'>
        <form action=''>
          <div className='id'>
            <label className='PlayerName'>Name</label>

          </div>
          <div>
            <input type='image'></input>
          </div>
        </form>
      </div>
      </div>
  )
}

export default Addplayer