




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../../api/api";
import "./addPlayer.css";
import { ImCross } from "react-icons/im";

const Addplayer = ({ closeaddPlayer, setView }) => {
  const navigate = useNavigate();

  const [playerData, setPlayerData] = useState({
    name: "",
    playerId: "", // Ensure this is sent as player_id in the backend
    age: "",
    nationality: "",
    category: "",
    batting: "",
    bowling: "",
    fitness: "",
    fielding: "",
    matchAwareness: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profile_picture", photo); // Ensure the field matches backend field name
    formData.append("name", playerData.name);
    formData.append("playerId", playerData.playerId); // Ensure this corresponds to player_id in backend
    formData.append("age", playerData.age);
    formData.append("nationality", playerData.nationality);
    formData.append("category", playerData.category);

    // Add more form data if necessary
    // formData.append("batting", playerData.batting);
    // formData.append("bowling", playerData.bowling);
    // formData.append("fitness", playerData.fitness);
    // formData.append("fielding", playerData.fielding);
    // formData.append("matchAwareness", playerData.matchAwareness);

    try {
      const response = await addPlayer(formData);

      if (response) {
        alert("Player added successfully!");
        setPlayerData({
          name: "",
          playerId: "",
          age: "",
          nationality: "",
          category: "",
        });
        setPhoto(null);

        // Change view to Add Stats after adding player
        setView("addStats"); // Show Add Stats form after player is added
      } else {
        alert("Failed to add player. Please try again.");
      }
    } catch (error) {
      console.error("Error adding player:", error);
      alert("There was an error adding the player.");
    }
  };

  return (
    <div className="add-player_container">
      <button className="close-btn" onClick={closeaddPlayer}>
        <ImCross />
      </button>

      <h1 className="heading">Add Player</h1>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Personal Details</h2>

          <div className="photo">
            <label>Photo</label>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
          </div>

          <div className="player-name">
            <label>Player Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter player name"
              value={playerData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="player-id">
            <label>Player ID</label>
            <input
              type="text"
              name="playerId"
              placeholder="Enter player ID"
              value={playerData.playerId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="age">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={playerData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="nationality">
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              placeholder="Enter nationality"
              value={playerData.nationality}
              onChange={handleChange}
              required
            />
          </div>

          <div className="category">
            <label>Category</label>
            <select
              name="category"
              value={playerData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
          </div>

          <button className="Addplayer-button" type="submit">
            Add Player
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addplayer;













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addPlayer } from "../../api/api"; // Import the API function
// import "./addPlayer.css";
// import { ImCross } from "react-icons/im";

// const Addplayer = ({ closeaddPlayer, setView, setPlayers }) => {
//   const [playerData, setPlayerData] = useState({
//     name: "",
//     playerId: "",
//     age: "",
//     nationality: "",
//     category: "",
//   });

//   const [photo, setPhoto] = useState(null);

//   const handleChange = (e) => {
//     setPlayerData({ ...playerData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setPhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("profile_picture", photo);
//     formData.append("name", playerData.name);
//     formData.append("playerId", playerData.playerId);
//     formData.append("age", playerData.age);
//     formData.append("nationality", playerData.nationality);
//     formData.append("category", playerData.category);

//     const response = await addPlayer(formData);

//     if (response) {
//       alert("Player added successfully!");
//       const updatedPlayers = await fetchPlayers(); // Fetch updated players
//       setPlayers(updatedPlayers); // Update players state
//       setView("addStats"); // Show Add Stats form
//     } else {
//       alert("Failed to add player.");
//     }
//   };

//   return (
//     <div className="add-player_container">
//       <button className="close-btn" onClick={closeaddPlayer}>
//         <ImCross />
//       </button>

//       <h1 className="heading">Add Player</h1>

//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <h2>Personal Details</h2>

//           <div className="photo">
//             <label>Photo</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} required />
//           </div>

//           <div className="player-name">
//             <label>Player Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter player name"
//               value={playerData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="player-id">
//             <label>Player ID</label>
//             <input
//               type="text"
//               name="playerId"
//               placeholder="Enter player ID"
//               value={playerData.playerId}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="age">
//             <label>Age</label>
//             <input
//               type="number"
//               name="age"
//               placeholder="Enter age"
//               value={playerData.age}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="nationality">
//             <label>Nationality</label>
//             <input
//               type="text"
//               name="nationality"
//               placeholder="Enter nationality"
//               value={playerData.nationality}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="category">
//             <label>Category</label>
//             <select
//               name="category"
//               value={playerData.category}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select a category</option>
//               <option value="Batsman">Batsman</option>
//               <option value="Bowler">Bowler</option>
//               <option value="All-rounder">All-rounder</option>
//               <option value="Wicketkeeper">Wicketkeeper</option>
//             </select>
//           </div>

//           <button className="Addplayer-button" type="submit">
//             Add Player
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addplayer;