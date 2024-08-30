import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform authentication (replace with your actual authentication logic)
      const user = { email }; // Example user object
      localStorage.setItem('user', JSON.stringify(user)); // Store user details
      navigate('/'); // Redirect to a page
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this with actual OTP sending logic
      alert(`OTP sent to ${forgotEmail}`);
      setShowOtpVerification(true);
    } catch (error) {
      alert('Failed to send OTP');
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      // Replace this with actual OTP verification logic
      alert(`OTP ${otp} verified`);
      setShowForgotPassword(false);
      setForgotEmail('');
      setOtp('');
    } catch (error) {
      alert('OTP verification failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {!showForgotPassword && !showOtpVerification && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
          </p>
        </form>
      )}

      {showForgotPassword && !showOtpVerification && (
        <form onSubmit={handleForgotPasswordSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
          <p>
            <a href="#" onClick={() => setShowForgotPassword(false)}>Back to Login</a>
          </p>
        </form>
      )}

      {showOtpVerification && (
        <form onSubmit={handleOtpVerification}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
          <p>
            <a href="#" onClick={() => setShowOtpVerification(false)}>Back to Forgot Password</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
