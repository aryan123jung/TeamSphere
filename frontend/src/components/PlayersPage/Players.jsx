// import React, { useEffect, useState } from "react";
// import { ImCross } from "react-icons/im";

// import { Chart } from "chart.js";
// import "./players.css"; // Separate CSS for Players Page
// import ActiveSlider from "../Slider/ActiveSlider";


//   const Players = ({ closePlayers }) => { // Accept the prop
//     return (
//       <>
//       <ActiveSlider/>
//       <div className="players-page">
//         <div className="player-cards">
//           <button className="close-btnPlayers" onClick={closePlayers}> {/* Use the prop */}
//             <ImCross />
//           </button>
  
//           <h1 className="player">Players</h1>
//           <input type="text" className="search-bar" placeholder="Search players..." />
  
         
//         </div> 
//       </div>
//       </>
//     );
//   };
  
//   export default Players;

import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./players.css"; // Separate CSS for Players Page
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Slider/index.js";

  const Players = ({ closePlayers }) => { // Accept the prop
    return (
      <>
      <div className="players-page">
        <div className="player-cards">
          <button className="close-btnPlayers" onClick={closePlayers}> {/* Use the prop */}
            <ImCross />
          </button>
  
          <h1 className="player">Players</h1>
          <input type="text" className="search-bar" placeholder="Search players..." />

         
    {/* <div className="active-slider"> */}

      <Swiper
      
        spaceBetween={-200} // Adjust the spacing between cards

        breakpoints={{
          340: { slidesPerView: 2, spaceBetween: 15 },
          700: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="swiper-container"
      >
            <div className="active-slider">

        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="slide-container">
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="overlay" />
              <div className="slide-content">
                <item.icon className="slide-icon" />
                <h1 className="slide-title">{item.title}</h1>
                <p className="slide-text">{item.content}</p>
              </div>
              <RxArrowTopRight className="arrow-icon" />
            </div>
          </SwiperSlide>
        ))}
            </div>

      </Swiper>
 
  
         
        </div> 
      </div>
      </>
    );
  };
  
  export default Players;
  
  