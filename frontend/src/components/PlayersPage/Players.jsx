// import React from "react";
// import { ImCross } from "react-icons/im";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper/modules";
// import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "../PlayersPage/index.js";
// import "./players.css"; // Separate CSS for Players Page

// const Players = ({ closePlayers }) => {
//   return (
//     <div className="players-page">
//       <div className="player-cards">
//         {/* Close Button */}
//         <button className="close-btnPlayers" onClick={closePlayers}>
//           <ImCross />
//         </button>

//         {/* Title */}
//         <h1 className="player">Players</h1>

//         {/* Search Bar */}
//         <input type="text" className="search-bar" placeholder="Search players..." />

//         {/* Swiper Slider */}
//           <Swiper
//             spaceBetween={15} // ✅ Fixed spacing issue
//             breakpoints={{
//               340: { slidesPerView: 2, spaceBetween: 10 },
//             700: { slidesPerView: 3, spaceBetween: 15 },
//             1024: { slidesPerView: 4, spaceBetween: 20 }, // ✅ Ensures proper horizontal layout
//           }}
//           freeMode={true}
//           pagination={{ clickable: true }}
//           modules={[FreeMode, Pagination]}
//           className="swiper-container"
//         >
//           {ServiceData.map((item) => (
//             <SwiperSlide key={item.title} className="swiper-slide">
//               <div className="slide-container">
//                 <div
//                   className="slide-bg"
//                   style={{ backgroundImage: `url(${item.backgroundImage})` }}
//                 />
//                 <div className="overlay" />
//                 <div className="slide-content">
//                   <item.icon className="slide-icon" />
//                   <h1 className="slide-title">{item.title}</h1>
//                   <p className="slide-text">{item.content}</p>
//                 </div>
//                 <RxArrowTopRight className="arrow-icon" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Players;
import React from "react";
import { ImCross } from "react-icons/im";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../PlayersPage/index.js";
import "./players.css"; // Ensure this file exists

const Players = ({ closePlayers }) => {
  return (
    <div className="players-page">
      <div className="player-cards">
        {/* Close Button */}
        <button className="close-btnPlayers" onClick={closePlayers}>
          <ImCross />
        </button>

        {/* Title */}
        <h1 className="player">Players</h1>

        {/* Search Bar */}
        <input type="text" className="search-bar" placeholder="Search players..." />

        {/* Swiper Slider */}
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
          {ServiceData.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="slide-container">
                {/* Background Image */}
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : "none",
                  }}
                />
                <div className="overlay" />

                {/* Slide Content */}
                <div className="slide-content">
                  {item.icon && <item.icon className="slide-icon" />}
                  <h1 className="slide-title">{item.title}</h1>
                  <p className="slide-text">{item.content}</p>
                </div>

                {/* Arrow Icon */}
                <RxArrowTopRight className="arrow-icon" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Players;
