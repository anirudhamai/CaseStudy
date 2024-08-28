import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      var fullName=firstName + " " + lastName;
      const response = await axios.post('http://localhost:5120/api/Customer/', {
          UserName: fullName,
          Email: email,
          Password: password
        }
    );
    console.log(response);
    navigate('/');
   }
   catch (error) {
      setError('User registration failed');
      }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          First Name
          <div>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
        </label>
        <label>
          Last Name
          <div>
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </label>
        <label>
          Email
          <div>
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          </div>
        </label>
        <label>
          Password
          <div>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
