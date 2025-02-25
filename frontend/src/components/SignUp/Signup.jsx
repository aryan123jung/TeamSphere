// // import React from 'react'
// // import {Link , useNavigate} from "react-router-dom"
// // import { FaLock } from "react-icons/fa";
// // import { FaBeer, FaUser } from 'react-icons/fa';
// // import { MdEmail } from "react-icons/md";
// // import { ImCross } from "react-icons/im";

// // import "../SignUp/signup.css";


// // const Signup = ({closeLogin}) => {
// //     const navigate = useNavigate();

// //   return (
// //     <div className='signup'>
// //         <button className="close-btn" onClick={closeLogin}>
// //             <ImCross />
        
// //             </button>


// //         <div className='form-box '>
// //             <form action="">
// //                 <h1>Sign-Up</h1>
// //                     <div className='input-box'>
// //                         <label  className='usernametext'>Username</label> <br/>
// //                         <input type='text'
// //                         placeholder='Username' required />
// //                          <FaUser className='icon'/>
// //                     </div>

// //                     <div className='input-box'>
// //                     <label  className='emailtext'>Email</label> <br/>
// //                         <input type='email'
// //                         placeholder='Email' required/>
// //                         <MdEmail className='icon'/>
// //                     </div>

// //                     <div className='input-box'>
// //                     <label  className='passwordtext'>Password</label> <br/>
// //                         <input type='password'
// //                         placeholder='Password' required/>
// //                         <FaLock className='icon' />
// //                     </div>

// //                         <button className='signup-button'>
// //                             Sign-up
// //                         </button>
                       

// //                     <div className='login-link'>
// //                     <span>Already have an account?</span>
// //                     <Link to="/login" > Login now</Link>
// //                     
// //                     </div>
// //             </form>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Signup

// import React from "react";
// import { FaLock, FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { ImCross } from "react-icons/im";

// import "../SignUp/signup.css";

// const Signup = ({ closeSignup, openLogin }) => {
//   return (
//     <div className="signup">
//       <button className="close-btn" onClick={closeSignup}>
//         <ImCross />
//       </button>

//       <div className="form-box">
//         <form action="">
//           <h1>Sign-Up</h1>
//           <div className="input-box">
//             <label className="usernametext">Username</label> <br />
//             <input type="text" placeholder="Username" required />
//             <FaUser className="icon" />
//           </div>

//           <div className="input-box">
//             <label className="emailtext">Email</label> <br />
//             <input type="email" placeholder="Email" required />
//             <MdEmail className="icon" />
//           </div>

//           <div className="input-box">
//             <label className="passwordtext">Password</label> <br />
//             <input type="password" placeholder="Password" required />
//             <FaLock className="icon" />
//           </div>

//           <button className="signup-button">Sign-up</button>

//           <div className="login-link">
//             <span>Already have an account?</span>
//             {/* Use openLogin function to switch views */}
//             <span
//               onClick={openLogin}
//               style={{ color: "rgb(180, 234, 16)", cursor: "pointer" }}
//             >
//               {" "}
//               Login now
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
