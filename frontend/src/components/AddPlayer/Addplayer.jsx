
import React from "react";
import "./addPlayer.css";
import { ImCross } from "react-icons/im";

const Addplayer = ({ closeaddPlayer }) => {
  return (
    <>
      <div className="add-player_container">
        <button className="close-btn" onClick={closeaddPlayer}>
          <ImCross />
        </button>

        <h1>Add Player</h1>

        <div className="form">
          <form action="">
            <h3>Personal Details</h3>

            <div className="photo">
              <label>Photo</label>
              <input type="file" accept="image/*" required />
            </div>

            <div className="player-name">
              <label>Player Name</label>
              <input type="text" placeholder="Enter player name" required />
            </div>

            <div className="player-id">
              <label>Player ID</label>
              <input type="text" placeholder="Enter player ID" required />
            </div>

            <div className="age">
              <label>Age</label>
              <input type="number" placeholder="Enter age" required />
            </div>

            <div className="nationality">
              <label>Nationality</label>
              <input type="text" placeholder="Enter nationality" required />
            </div>

            <div className="category">
              <label>Category</label>
              <input type="text" placeholder="Enter category" required />
            </div>
          </form>

          <form className="players_stats">
            <h3>Player Stats</h3>

            <div className="batting">
              <label>Batting</label>
              <input type="number" placeholder="Rate batting (1-100)" required />
            </div>

            <div className="bowling">
              <label>Bowling</label>
              <input type="number" placeholder="Rate bowling (1-100)" required />
            </div>

            <div className="fitness">
              <label>Fitness</label>
              <input type="number" placeholder="Rate fitness (1-100)" required />
            </div>

            <div className="fielding">
              <label>Fielding</label>
              <input type="number" placeholder="Rate fielding (1-100)" required />
            </div>

            <div className="match-awareness">
              <label>Match Awareness</label>
              <input type="number" placeholder="Rate match awareness (1-100)" required />
            </div>

            <button className="submit-button">Add Player</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addplayer;


// import React, { useState } from "react";
// import axios from "axios";
// import "./addPlayer.css";
// import { ImCross } from "react-icons/im";

// const Addplayer = ({ closeaddPlayer }) => {
//   const [playerData, setPlayerData] = useState({
//     name: "",
//     playerId: "",
//     age: "",
//     nationality: "",
//     category: "",
//     stats: {
//       batting: "",
//       bowling: "",
//       fitness: "",
//       fielding: "",
//       matchAwareness: ""
//     },
//     photo: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPlayerData({
//       ...playerData,
//       [name]: value
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setPlayerData({
//       ...playerData,
//       photo: file
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", playerData.name);
//     formData.append("playerId", playerData.playerId);
//     formData.append("age", playerData.age);
//     formData.append("nationality", playerData.nationality);
//     formData.append("category", playerData.category);
//     formData.append("batting", playerData.stats.batting);
//     formData.append("bowling", playerData.stats.bowling);
//     formData.append("fitness", playerData.stats.fitness);
//     formData.append("fielding", playerData.stats.fielding);
//     formData.append("matchAwareness", playerData.stats.matchAwareness);
//     formData.append("photo", playerData.photo);

//     try {
//       const response = await axios.post("http://localhost:4000/uploads/your-image.jpg", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log(response.data); // handle the response as needed
//       closeaddPlayer(); // Close the form after successful submission
//     } catch (error) {
//       console.error("Error adding player:", error);
//     }
//   };

//   return (
//     <>
//       <div className="add-player_container">
//         <button className="close-btn" onClick={closeaddPlayer}>
//           <ImCross />
//         </button>

//         <h1>Add Player</h1>

//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <h3>Personal Details</h3>

//             <div className="photo">
//               <label>Photo</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 required
//                 onChange={handleFileChange}
//               />
//             </div>

//             <div className="player-name">
//               <label>Player Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter player name"
//                 name="name"
//                 value={playerData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="player-id">
//               <label>Player ID</label>
//               <input
//                 type="text"
//                 placeholder="Enter player ID"
//                 name="playerId"
//                 value={playerData.playerId}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="age">
//               <label>Age</label>
//               <input
//                 type="number"
//                 placeholder="Enter age"
//                 name="age"
//                 value={playerData.age}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="nationality">
//               <label>Nationality</label>
//               <input
//                 type="text"
//                 placeholder="Enter nationality"
//                 name="nationality"
//                 value={playerData.nationality}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="category">
//               <label>Category</label>
//               <input
//                 type="text"
//                 placeholder="Enter category"
//                 name="category"
//                 value={playerData.category}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <h3>Player Stats</h3>

//             <div className="batting">
//               <label>Batting</label>
//               <input
//                 type="number"
//                 placeholder="Rate batting (1-100)"
//                 name="batting"
//                 value={playerData.stats.batting}
//                 onChange={(e) =>
//                   setPlayerData({
//                     ...playerData,
//                     stats: { ...playerData.stats, batting: e.target.value }
//                   })
//                 }
//                 required
//               />
//             </div>

//             <div className="bowling">
//               <label>Bowling</label>
//               <input
//                 type="number"
//                 placeholder="Rate bowling (1-100)"
//                 name="bowling"
//                 value={playerData.stats.bowling}
//                 onChange={(e) =>
//                   setPlayerData({
//                     ...playerData,
//                     stats: { ...playerData.stats, bowling: e.target.value }
//                   })
//                 }
//                 required
//               />
//             </div>

//             <div className="fitness">
//               <label>Fitness</label>
//               <input
//                 type="number"
//                 placeholder="Rate fitness (1-100)"
//                 name="fitness"
//                 value={playerData.stats.fitness}
//                 onChange={(e) =>
//                   setPlayerData({
//                     ...playerData,
//                     stats: { ...playerData.stats, fitness: e.target.value }
//                   })
//                 }
//                 required
//               />
//             </div>

//             <div className="fielding">
//               <label>Fielding</label>
//               <input
//                 type="number"
//                 placeholder="Rate fielding (1-100)"
//                 name="fielding"
//                 value={playerData.stats.fielding}
//                 onChange={(e) =>
//                   setPlayerData({
//                     ...playerData,
//                     stats: { ...playerData.stats, fielding: e.target.value }
//                   })
//                 }
//                 required
//               />
//             </div>

//             <div className="match-awareness">
//               <label>Match Awareness</label>
//               <input
//                 type="number"
//                 placeholder="Rate match awareness (1-100)"
//                 name="matchAwareness"
//                 value={playerData.stats.matchAwareness}
//                 onChange={(e) =>
//                   setPlayerData({
//                     ...playerData,
//                     stats: { ...playerData.stats, matchAwareness: e.target.value }
//                   })
//                 }
//                 required
//               />
//             </div>

//             <button className="submit-button" type="submit">
//               Add Player
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Addplayer;
