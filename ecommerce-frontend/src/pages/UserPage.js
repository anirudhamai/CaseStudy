import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const [userDetails, setUserDetails] = useState({
    phoneNumber: '',
    address: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/update', userDetails);
      alert('User details updated successfully');
      // Redirect to the user's profile or another page if needed
      navigate('/profile'); // Use navigate instead of history.push
    } catch (error) {
      alert('Error updating user details');
    }
  };

  return (
    <div>
      <h2>Update Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserPage;
