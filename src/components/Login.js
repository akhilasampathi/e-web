import React, { useState } from "react";
import './Login.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
import SERVER_URL from '../config';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/user/login`, {
        method: 'POST',
        body: JSON.stringify({ email, otp }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        
        // OTP verification successful, navigate to home page
        navigate('/home');
      } else {
        // OTP verification failed
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      // Error occurred while verifying OTP
      setError('An error occurred while logging in. Please try again.');
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login with OTP</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
              <div>
                <label>OTP:</label>
                <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
              </div>
              <button onClick={handleLogin}>Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
// import React, { useState } from "react";
// import './Login.css'; // Import the CSS file
// import { useNavigate } from "react-router-dom";
// import SERVER_URL from '../config';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [otp, setOTP] = useState('');
//   const [error, setError] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => {
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(`${SERVER_URL}/user/login`, {
//         method: 'POST',
//         body: JSON.stringify({ email, otp }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.ok) {
//         // OTP verification successful, navigate to home page
//         navigate('/home');
//       } else {
//         // OTP verification failed
//         setError('Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       // Error occurred while verifying OTP
//       setError('An error occurred while logging in. Please try again.');
//     }
//   };
  

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login with OTP</h2>
//         <button onClick={openPopup}>Open Popup</button>
//         {isOpen && (
//           <div className="popup">
//             <form onSubmit={handleLogin}>
//               <div>
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//               </div>
//               <div>
//                 <label>OTP:</label>
//                 <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
//               </div>
//               <button type="submit">Login</button>
//               <button type="button" onClick={closePopup}>Close</button>
//             </form>
//           </div>
//         )}
//         {error && <p className="error">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;



