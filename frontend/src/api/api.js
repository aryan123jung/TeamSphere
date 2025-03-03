import axios from 'axios';

const BASE_URL = "http://localhost:5000"; // Backend URL
// const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const registerCoach = async (coachData) => {
    try {
        const response = await axios.post(`${BASE_URL}/coach/register`, coachData);
        return response.data;
    } catch (error) {
        console.error("Error registering coach:", error);
        return null;
    }
};

export const loginCoach = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/coach/login`, loginData);
        return response.data;
    } catch (error) {
        console.error("Error logging in coach:", error);
        return null;
    }
};

// Add Player
export const addPlayer = async (playerData) => {
    try {
        const response = await axios.post(`${BASE_URL}/players/create`, playerData, {
            headers: {
                "Content-Type": "multipart/form-data", // Ensure it's for file upload
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding player:", error);
        return null;
    }
};



//Create Player Stats (this corresponds to router.post('/create', createPlayerStats))
// export const createPlayerStats = async (playerStatsData) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/playerStatus/create`, playerStatsData, {
//             headers: {
//                 "Content-Type": "application/json", // Adjust content type if necessary
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error creating player stats:", error);
//         return null;
//     }
// };
export const createPlayerStats = async (stats) => {
    try {
        console.log("Sending playerStatsData:", stats); // Log the data being sent
        const response = await axios.post(`${BASE_URL}/playerStatus/create`, stats, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Response from createPlayerStats:", response.data); // Log the response
        return response.data;
    } catch (error) {
        console.error("Error creating player stats:", error.response?.data || error.message);
        return null;
    }
};





// Update player stats
export const updatePlayerStats = async (playerId, stats) => {
    try {
      console.log("Updating stats for playerId:", playerId, "with data:", stats); // Log the data being sent
      const response = await axios.put(`${BASE_URL}/players/${playerId}/stats`, stats);
      console.log("Response from updatePlayerStats:", response.data); // Log the response
      return response.data;
    } catch (error) {
      console.error("Error updating player stats:", error.response?.data || error.message);
      return null;
    }
  };
  
  // Delete a player
  export const deletePlayer = async (playerId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/players/${playerId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting player:", error);
      return null;
    }
  };
  
  // Fetch all players
  export const fetchPlayers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/players`);
      return response.data;
    } catch (error) {
      console.error("Error fetching players:", error);
      return [];
    }
  };