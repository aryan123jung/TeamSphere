// // import React, { useState } from "react";
// // // import { Chart } from "chart.js";
// // // import "./addPlayer.css"; 
// // import "./addPlayer.css";
// // import { ImCross } from "react-icons/im";


// // const Addplayer = ({closeaddPlayer}) => {
// //   return (
// //     <>
// //     <div className="add-player_container">
// //        <button className="close-btn" onClick={closeaddPlayer}>
// //           <ImCross />
// //           </button>

// //           <h1>Players Details</h1>
// //           <h2>Players Stats</h2>

// //           <div className="form">
// //           <form action="">
// //           <h3>Add Player</h3>
// //           <div className="input-box">
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               required
// //             />
            
// //           </div>

// //           <div className="input-box">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               required
// //             />
// //           </div>

          

// //           <button className="login-button">Login</button>

          
// //         </form>
// //         </div>
// //     </div>
// //     </>
// //   )
// // }
// // export default Addplayer

// import React, { useState } from "react";
// import "./addPlayer.css";
// import { ImCross } from "react-icons/im";

// const Addplayer = ({ closeaddPlayer }) => {
//   return (
//     <>
//       <div className="add-player_container">
//         <button className="close-btn" onClick={closeaddPlayer}>
//           <ImCross />
//         </button>

//         <h1>Player Details</h1>

//         <div className="form">
//           <form action="">
//             <h3>Personal Details</h3>

//             <div className="input-box">
//               <label>Photo</label>
//               <input type="file" accept="image/*" required />
//             </div>

//             <div className="input-box">
//               <label>Player Name</label>
//               <input type="text" placeholder="Enter player name" required />
//             </div>

//             <div className="input-box">
//               <label>Player ID</label>
//               <input type="text" placeholder="Enter player ID" required />
//             </div>

//             <div className="input-box">
//               <label>Age</label>
//               <input type="number" placeholder="Enter age" required />
//             </div>

//             <div className="input-box">
//               <label>Nationality</label>
//               <input type="text" placeholder="Enter nationality" required />
//             </div>

//             <div className="input-box">
//               <label>Category</label>
//               <input type="text" placeholder="Enter category" required />
//             </div>
//             </form>


//             <form className="players_stats">
//             <h3>Player Stats</h3>

//             <div className="input-box">
//               <label>Batting</label>
//               <input type="number" placeholder="Rate batting (1-100)" required />
//             </div>

//             <div className="input-box">
//               <label>Bowling</label>
//               <input type="number" placeholder="Rate bowling (1-100)" required />
//             </div>

//             <div className="input-box">
//               <label>Fitness</label>
//               <input type="number" placeholder="Rate fitness (1-100)" required />
//             </div>

//             <div className="input-box">
//               <label>Fielding</label>
//               <input type="number" placeholder="Rate fielding (1-100)" required />
//             </div>

//             <div className="input-box">
//               <label>Match Awareness</label>
//               <input type="number" placeholder="Rate match awareness (1-100)" required />
//             </div>

//             <button className="submit-button">Add Player</button>
//             </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Addplayer;
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
