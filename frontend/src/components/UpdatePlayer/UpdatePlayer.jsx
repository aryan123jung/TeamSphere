import React from 'react'
import { ImCross } from "react-icons/im";
import "./update.css";

const UpdatePlayer = ({closeUpdatePlayer}) => {
  return (
      <>
          <div className="add-player_container">
            <button className="close-btn" onClick={closeUpdatePlayer}>
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
    

export default UpdatePlayer;