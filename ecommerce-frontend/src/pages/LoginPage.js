import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('ani@gmail.com');
  const [password, setPassword] = useState('pass26');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5120/api/Customer/authenticate/', {
        email: email, password: password });
      const token = response.data;
      // console.log(token);
      localStorage.setItem('token', token);
   // Redirect to the Products page
      console.log(token);
      navigate('/products');
   }
   catch (error) {
      setError('Invalid username or password');
      }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="abc@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
