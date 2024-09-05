import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css'; // Use CSS module for scoped styles

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes('@')) {
      setError('Invalid email format');
      return false;
    }
    if (phone.length < 10) {
      setError('Phone number must be at least 10 digits');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Mock OTP sending logic
      await axios.post('/api/send-otp', { email });
      setSuccess('OTP sent to your email. Please check your inbox.');
      setOtpSent(true);
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    // Add OTP verification logic here
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign up</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      {!otpSent ? (
        <form className={styles.form} onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      ) : (
        <form className={styles.otpForm} onSubmit={handleOtpVerify}>
          <p className={styles.otpInstruction}>Please check your email for the OTP.</p>
          <input
            type="text"
            placeholder="Enter OTP"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;








































// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(true);
//   //backend required
//   //const [success, setSuccess] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     if (!email.includes('@')) {
//       setError('Invalid email format');
//       return false;
//     }
//     if (phone.length < 10) {
//       setError('Phone number must be at least 10 digits');
//       return false;
//     }
//     if (password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       //backend required
//       // Send OTP request to backend
//      // await axios.post('/api/send-otp', { email });
//       setSuccess('OTP sent to your email. Please check your inbox.');
//       setOtpSent(true);
//     } catch (error) {
//       setError('Failed to send OTP. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//       {!otpSent ? (
//         <form onSubmit={handleRegister}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       ) : (
//         <form
//         //backend required
//          /*onSubmit={handleOtpVerify}*/>
//           <p>Please check your email for the OTP.</p>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             //backend required
//             //value={otp}
//            // onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default RegisterPage;
