
import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import PlayerDetails from "../PlayersPage/PlayerDetails";
import { fetchPlayers } from "../../api/api";
import "./pla.css";

const Players = ({ closePlayers, openPlayerDetails, players, setPlayers }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const backendBaseUrl = "http://localhost:5000"; // Replace with your backend URL

  // Fetch players from the backend
  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data); // Update players state
    };
    getPlayers();
  }, [setPlayers]);

  return (
    <div className="players-page">
      <div className="player-cards">
        <button className="close-btnPlayers" onClick={closePlayers}>
          <ImCross />
        </button>

        <h1 className="playerH">Players</h1>

        <input type="text" className="search-bar" placeholder="Search players..." />

        <Swiper
          spaceBetween={15}
          breakpoints={{
            340: { slidesPerView: 2, spaceBetween: 10 },
            700: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="swiper-container"
        >
          {players.map((player, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="slide-container"
                onClick={() => {
                  setSelectedPlayer(player); // Open modal on click
                  openPlayerDetails(player); // Pass player to parent
                }}
              >
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage: player.photo
                      ? `url(${backendBaseUrl}${player.photo})`
                      : "url(/fallback-image.png)",
                  }}
                />
                <div className="overlay" />
                <div className="slide-content">
                  <h1 className="slide-title">{player.name}</h1>
                  <p className="slide-text">{player.category}</p>
                </div>

                {/* Arrow Icon */}
                <RxArrowTopRight className="arrow-icon" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Player Details Modal */}
      {selectedPlayer && (
        <PlayerDetails
          player={selectedPlayer}
          closePlayerDetails={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default Players;

// import React, { useState } from "react";
// import { ImCross } from "react-icons/im";
// import { RxArrowTopRight } from "react-icons/rx";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper/modules";
// import { ServiceData } from "../PlayersPage/index.js"; // Ensure this contains correct player data
// import PlayerDetails from "../PlayersPage/PlayerDetails"; // Import the modal component
// import "./pla.css";

// const Players = ({ closePlayers }) => {
//   const [selectedPlayer, setSelectedPlayer] = useState(null);

//   return (
//     <div className="players-page">
//       <div className="player-cards">
//         <button className="close-btnPlayers" onClick={closePlayers}>
//           <ImCross />
//         </button>

//         <h1 className="player">Players</h1>

//         <input type="text" className="search-bar" placeholder="Search players..." />

//         <Swiper
//           spaceBetween={15}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 10 },
//             700: { slidesPerView: 3, spaceBetween: 15 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           freeMode={true}
//           pagination={{ clickable: true }}
//           modules={[FreeMode, Pagination]}
//           className="swiper-container"
//         >
//           {ServiceData.map((player, index) => (
//             <SwiperSlide key={index} className="swiper-slide">
//               <div
//                 className="slide-container"
//                 onClick={() => setSelectedPlayer(player)} // Open modal on click
//               >
//                 {/* Background Image */}
//                 <div
//                   className="slide-bg"
//                   style={{
//                     backgroundImage: player.photo ? `url(${player.photo})` : "none",
//                   }}
//                 />
//                 <div className="overlay" />

//                 {/* card ko baremah ani tesbhitra ko name,category ani arrow*/}
//                 <div className="slide-content">
//                   <h1 className="slide-title">{player.name}</h1>
//                   <p className="slide-text">{player.category}</p>
//                 </div>

//                 {/* Arrow Icon */}
//                 <RxArrowTopRight className="arrow-icon" />
//               </div>

              
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Player Details Modal */}
//       {selectedPlayer && (
//         <PlayerDetails player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
//       )}
//     </div>
//   );
// };

// export default Players;