// import React from "react";
// import videoBg from "../assets/videoBg3.mp4"; // Ensure the file extension is correct
// import "./home.css"; // Correct import path
// import image from "../assets/background.png";

// const Home = () => {
//   return (
//     <div className="main">
//       <div className="overlay"></div>
//       <video src={videoBg} autoPlay loop muted />
//       <div className="content">
//         <h1>Welcome</h1>
//         <p>To TeamSphere.</p>
//       </div>

//       <div className="overlay2">
//         <image src="background.png"/>
//       </div>
//     </div>

       

//   );
// };

// export default Home;

import React from "react";
import videoBg from "../assets/videoBg4.mp4";
import "./home.css";

const Home = () => {
  return (
    <div className="main">
      {/* Video Section */}
      <div className="video-section">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>To TeamSphere.</p>
        </div>
      </div>

    </div>
  );
};

export default Home;