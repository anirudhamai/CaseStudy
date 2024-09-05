// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css'; // Import CSS file
// import logo from '../assets/images/e-com_img_2.jpg';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpVerification, setShowOtpVerification] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = { email }; // Example user object
//       localStorage.setItem('user', JSON.stringify(user)); // Store user details
//       navigate('/'); // Redirect to a page
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       alert(`OTP sent to ${forgotEmail}`);
//       setShowOtpVerification(true);
//     } catch (error) {
//       alert('Failed to send OTP');
//     }
//   };

//   const handleOtpVerification = async (e) => {
//     e.preventDefault();
//     try {
//       alert(`OTP ${otp} verified`);
//       setShowForgotPassword(false);
//       setForgotEmail('');
//       setOtp('');
//     } catch (error) {
//       alert('OTP verification failed');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="logo-section">
//         <img src={logo} alt="E-commerce Logo" className="logo" />
//       </div>
//       <div className="form-section">
//         <h2>Welcome Back👋</h2>
//         {!showForgotPassword && !showOtpVerification && (
//           <form onSubmit={handleSubmit} className="login-form">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Login</button>
//             <p>
//               <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
//             </p>
//           </form>
//         )}

//         {showForgotPassword && !showOtpVerification && (
//           <form onSubmit={handleForgotPasswordSubmit} className="forgot-password-form">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={forgotEmail}
//               onChange={(e) => setForgotEmail(e.target.value)}
//               required
//             />
//             <button type="submit">Send OTP</button>
//             <p>
//               <a href="#" onClick={() => setShowForgotPassword(false)}>Back to Login</a>
//             </p>
//           </form>
//         )}

//         {showOtpVerification && (
//           <form onSubmit={handleOtpVerification} className="otp-verification-form">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//             <button type="submit">Verify OTP</button>
//             <p>
//               <a href="#" onClick={() => setShowOtpVerification(false)}>Back to Forgot Password</a>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
// LoginPage.js

// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import googleIcon from '../assets/images/google-icon.svg'; // Ensure this path is correct

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <button onClick={handleGoogleSignIn} className={styles.googleButton}>
          <img src={googleIcon} alt="Google logo" />
          Continue with Google
        </button>
        
        <div className={styles.orSection}>
          <div className={styles.orLine}></div>
          <span className={styles.orText}>or</span>
          <div className={styles.orLine}></div>
        </div>

        {!showForgotPassword && !showOtpVerification && (
          <div className={styles.formWrapper}>
            <h2 className={styles.welcomeText}>Welcome Back👋</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            <button onClick={() => setShowForgotPassword(true)} className={styles.forgotPasswordButton}>
              Forgot Password?
            </button>
            
            <div className={styles.signupSection}>
              <span>Don't have an account? </span>
              <a href="/register" className={styles.signupLink}>Sign Up</a>
            </div>
          </div>
        )}

        {showForgotPassword && !showOtpVerification && (
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email:</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
            <button onClick={() => setShowForgotPassword(false)} className={styles.backButton}>
              Back to Login
            </button>
          </div>
        )}

        {showOtpVerification && (
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Verify OTP</h2>
            <form onSubmit={handleOtpVerification} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </form>
            <button onClick={() => setShowOtpVerification(false)} className={styles.backButton}>
              Back to Forgot Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
