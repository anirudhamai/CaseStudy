import React, { useState } from 'react';
import './AddressPage.css';

// AddressForm Component
const AddressForm = ({ onAddAddress }) => {
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    city: '',
    state: '',
    houseNo: '',
    roadName: '',
    landmark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAddress(address);
    setAddress({
      name: '',
      phone: '',
      pincode: '',
      city: '',
      state: '',
      houseNo: '',
      roadName: '',
      landmark: ''
    });
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={address.name} onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" value={address.phone} onChange={handleChange} required />
      <input name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} required />
      <input name="city" placeholder="City" value={address.city} onChange={handleChange} required />
      <input name="state" placeholder="State" value={address.state} onChange={handleChange} required />
      <input name="houseNo" placeholder="House No/Building Name" value={address.houseNo} onChange={handleChange} required />
      <input name="roadName" placeholder="Road Name/Colony/Area" value={address.roadName} onChange={handleChange} required />
      <input name="landmark" placeholder="Landmark" value={address.landmark} onChange={handleChange} />
      <button type="submit">Add Address</button>
    </form>
  );
};

// AddressList Component
const AddressList = ({ addresses, onSetDefault }) => (
  <ul className="address-list">
    {addresses.map((addr, index) => (
      <li key={index}>
        <div>
          <p><strong>Name:</strong> {addr.name}</p>
          <p><strong>Phone:</strong> {addr.phone}</p>
          <p><strong>Pincode:</strong> {addr.pincode}</p>
          <p><strong>City:</strong> {addr.city}</p>
          <p><strong>State:</strong> {addr.state}</p>
          <p><strong>House No/Building Name:</strong> {addr.houseNo}</p>
          <p><strong>Road Name/Colony/Area:</strong> {addr.roadName}</p>
          <p><strong>Landmark:</strong> {addr.landmark}</p>
          <button 
            className={addr.isDefault ? 'default' : ''} 
            onClick={() => onSetDefault(index)}
          >
            {addr.isDefault ? 'Default' : 'Set as Default'}
          </button>
        </div>
      </li>
    ))}
  </ul>
);

// Main AddressPage Component
const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(null);

  const addAddress = (newAddress) => {
    setAddresses([...addresses, { ...newAddress, isDefault: defaultAddressIndex === addresses.length }]);
  };

  const setDefaultAddress = (index) => {
    const updatedAddresses = addresses.map((addr, idx) => ({
      ...addr,
      isDefault: idx === index
    }));
    setAddresses(updatedAddresses);
    setDefaultAddressIndex(index);
  };

  return (
    <div className="address-page">
      <h1>Manage Addresses</h1>
      <AddressForm onAddAddress={addAddress} />
      <AddressList addresses={addresses} onSetDefault={setDefaultAddress} />
    </div>
  );
};

export default AddressPage;
