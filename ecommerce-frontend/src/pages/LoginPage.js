// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import googleIcon from '../assets/images/google-icon.svg'; // Ensure this path is correct

// const LoginPage = () => {
//   const [email, setEmail] = useState('john.doe@example.com');
//   const [password, setPassword] = useState('john.doe@example.com');
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpVerification, setShowOtpVerification] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       // Implement authentication logic here
//       const user = { email };
//       localStorage.setItem('user', JSON.stringify(user));
//       navigate('/');
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       // Implement forgot password logic here
//       alert('An OTP has been sent to ' + forgotEmail);
//       setShowOtpVerification(true);
//     } catch (err) {
//       setError('Failed to send OTP. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpVerification = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       // Implement OTP verification logic here
//       alert('OTP has been verified');
//       setForgotEmail('');
//       setOtp('');
//       setShowOtpVerification(false);
//       setShowForgotPassword(false);
//     } catch (err) {
//       setError('OTP verification failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = () => {
//     // Integrate Google Sign-In logic here
//     alert('Google Sign-In clicked!');
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handleGoogleSignIn}>
//           <img src={googleIcon} alt="Google logo" />
//           Continue with Google
//         </button>
        
//         <div>
//           <div></div>
//           <span>or</span>
//           <div></div>
//         </div>

//         {!showForgotPassword && !showOtpVerification && (
//           <div>
//             <h2>Welcome Back👋</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Password:</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" disabled={loading}>
//                 {loading ? 'Loading...' : 'Log In'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowForgotPassword(true)}
//               >
//                 Forgot Password?
//               </button>
//             </form>
//           </div>
//         )}

//         {showForgotPassword && !showOtpVerification && (
//           <div>
//             <h2>Forgot Password</h2>
//             <form onSubmit={handleForgotPasswordSubmit}>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" disabled={loading}>
//                 {loading ? 'Sending OTP...' : 'Send OTP'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowForgotPassword(false)}
//               >
//                 Back to Login
//               </button>
//             </form>
//           </div>
//         )}

//         {showOtpVerification && (
//           <div>
//             <h2>Verify OTP</h2>
//             <form onSubmit={handleOtpVerification}>
//               <div>
//                 <label>OTP:</label>
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" disabled={loading}>
//                 {loading ? 'Verifying OTP...' : 'Verify OTP'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowOtpVerification(false)}
//               >
//                 Back to Forgot Password
//               </button>
//             </form>
//           </div>
//         )}

//         <div>
//           <p>
//             Don't have an account?{' '}
//             <a href="/signup">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import googleIcon from '../assets/images/google-icon.svg'; // Ensure this path is correct
// // import './LoginPage.css'; // Import the updated CSS file

// // const LoginPage = () => {
// //   const [email, setEmail] = useState('john.doe@example.com');
// //   const [password, setPassword] = useState('john.doe@example.com');
// //   const [showForgotPassword, setShowForgotPassword] = useState(false);
// //   const [forgotEmail, setForgotEmail] = useState('');
// //   const [otp, setOtp] = useState('');
// //   const [showOtpVerification, setShowOtpVerification] = useState(false);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     try {
// //       // Implement authentication logic here
// //       const user = { email };
// //       localStorage.setItem('user', JSON.stringify(user));
// //       navigate('/');
// //     } catch (err) {
// //       setError('Login failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleForgotPasswordSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     try {
// //       // Implement forgot password logic here
// //       alert('An OTP has been sent to ' + forgotEmail);
// //       setShowOtpVerification(true);
// //     } catch (err) {
// //       setError('Failed to send OTP. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleOtpVerification = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     try {
// //       // Implement OTP verification logic here
// //       alert('OTP has been verified');
// //       setForgotEmail('');
// //       setOtp('');
// //       setShowOtpVerification(false);
// //       setShowForgotPassword(false);
// //     } catch (err) {
// //       setError('OTP verification failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleGoogleSignIn = () => {
// //     // Integrate Google Sign-In logic here
// //     alert('Google Sign-In clicked!');
// //   };

// //   return (
// //     <div className="container">
// //       <div className="formContainer">
// //         <button onClick={handleGoogleSignIn} className="googleButton">
// //           <img src={googleIcon} alt="Google logo" className="googleIcon" />
// //           Continue with Google
// //         </button>
        
// //         <div className="orSection">
// //           <div className="orLine"></div>
// //           <span className="orText">or</span>
// //           <div className="orLine"></div>
// //         </div>

// //         {!showForgotPassword && !showOtpVerification && (
// //           <div className="formWrapper">
// //             <h2 className="welcomeText">Welcome Back!</h2>
// //             {error && <div className="error">{error}</div>}
// //             <form onSubmit={handleSubmit}>
// //               <div className="inputGroup">
// //                 <label className="label">Email</label>
// //                 <input
// //                   type="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                   className="input"
// //                 />
// //               </div>
// //               <div className="inputGroup">
// //                 <label className="label">Password</label>
// //                 <input
// //                   type="password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   required
// //                   className="input"
// //                 />
// //               </div>
// //               <button type="submit" className="button" disabled={loading}>
// //                 {loading ? 'Loading...' : 'Log In'}
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => setShowForgotPassword(true)}
// //                 className="forgotPasswordButton"
// //               >
// //                 Forgot Password?
// //               </button>
// //             </form>
// //           </div>
// //         )}

// //         {showForgotPassword && !showOtpVerification && (
// //           <div className="formWrapper">
// //             <h2 className="welcomeText">Forgot Password</h2>
// //             {error && <div className="error">{error}</div>}
// //             <form onSubmit={handleForgotPasswordSubmit}>
// //               <div className="inputGroup">
// //                 <label className="label">Email</label>
// //                 <input
// //                   type="email"
// //                   value={forgotEmail}
// //                   onChange={(e) => setForgotEmail(e.target.value)}
// //                   required
// //                   className="input"
// //                 />
// //               </div>
// //               <button type="submit" className="button" disabled={loading}>
// //                 {loading ? 'Sending OTP...' : 'Send OTP'}
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => setShowForgotPassword(false)}
// //                 className="backButton"
// //               >
// //                 Back to Login
// //               </button>
// //             </form>
// //           </div>
// //         )}

// //         {showOtpVerification && (
// //           <div className="formWrapper">
// //             <h2 className="welcomeText">Verify OTP</h2>
// //             {error && <div className="error">{error}</div>}
// //             <form onSubmit={handleOtpVerification}>
// //               <div className="inputGroup">
// //                 <label className="label">OTP</label>
// //                 <input
// //                   type="text"
// //                   value={otp}
// //                   onChange={(e) => setOtp(e.target.value)}
// //                   required
// //                   className="input"
// //                 />
// //               </div>
// //               <button type="submit" className="button" disabled={loading}>
// //                 {loading ? 'Verifying OTP...' : 'Verify OTP'}
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => setShowOtpVerification(false)}
// //                 className="backButton"
// //               >
// //                 Back to Forgot Password
// //               </button>
// //             </form>
// //           </div>
// //         )}

// //         <div className="signupSection">
// //           <p>
// //             Don't have an account?{' '}
// //             <a href="/signup" className="signupLink">
// //               Sign Up
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/images/google-icon.svg'; // Ensure this path is correct
import './LoginPage.css'; // Import the updated CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('john.doe@example.com');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Implement authentication logic here
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Implement forgot password logic here
      alert('An OTP has been sent to ' + forgotEmail);
      setShowOtpVerification(true);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Implement OTP verification logic here
      alert('OTP has been verified');
      setForgotEmail('');
      setOtp('');
      setShowOtpVerification(false);
      setShowForgotPassword(false);
    } catch (err) {
      setError('OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Integrate Google Sign-In logic here
    alert('Google Sign-In clicked!');
  };

  return (
    <div className="container">
      <div className="formContainer">
        <button onClick={handleGoogleSignIn} className="googleButton">
          <img src={googleIcon} alt="Google logo" className="googleIcon" />
          Continue with Google
        </button>
        
        <div className="orSection">
          <div className="orLine"></div>
          <span className="orText">or</span>
          <div className="orLine"></div>
        </div>

        {!showForgotPassword && !showOtpVerification && (
          <div className="formWrapper">
            <h2 className="welcomeText">Welcome Back!</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <label className="label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <label className="label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input"
                />
              </div>
              <button type="submit" className="button" disabled={loading}>
                {loading ? 'Loading...' : 'Log In'}
              </button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="forgotPasswordButton"
              >
                Forgot Password?
              </button>
            </form>
          </div>
        )}

        {showForgotPassword && !showOtpVerification && (
          <div className="formWrapper">
            <h2 className="welcomeText">Forgot Password</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleForgotPasswordSubmit}>
              <div className="inputGroup">
                <label className="label">Email</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  className="input"
                />
              </div>
              <button type="submit" className="button" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="backButton"
              >
                Back to Login
              </button>
            </form>
          </div>
        )}

        {showOtpVerification && (
          <div className="formWrapper">
            <h2 className="welcomeText">Verify OTP</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleOtpVerification}>
              <div className="inputGroup">
                <label className="label">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="input"
                />
              </div>
              <button type="submit" className="button" disabled={loading}>
                {loading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
              <button
                type="button"
                onClick={() => setShowOtpVerification(false)}
                className="backButton"
              >
                Back to Forgot Password
              </button>
            </form>
          </div>
        )}

        <div className="signupSection">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="signupLink">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
