import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mac from "../assets/images/macbook.jpg";
import iphone from "../assets/images/iphone.png";
import './OrderDetail.css';

const staticProducts = [
  { id: 1, image: mac, title: 'Product 1', price: 20, quantity: 1 },
  { id: 2, image: iphone, title: 'Product 2', price: 30, quantity: 1 },
];

const initialAddresses = [
  { id: 1, address: '123 Main St, City, Country' },
  { id: 2, address: '456 Elm St, City, Country' },
];

const OrderDetailsPage = () => {
  const [products] = useState(staticProducts);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addresses] = useState(initialAddresses);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: '',
    houseNo: '',
    street: '',
    area: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
  });

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleAddOrUpdateAddress = () => {
    if (editingAddress) {
      setEditingAddress(null);
    } else {
      setShowAddressForm(false);
      setNewAddress({
        name: '',
        houseNo: '',
        street: '',
        area: '',
        city: '',
        district: '',
        state: '',
        pinCode: '',
      });
    }
  };

  const navigate = useNavigate();

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const discount = totalPrice * 0.1; // Example discount
  const finalPrice = totalPrice - discount;

  const handlePayment = () => {
    if (!selectedAddress) {
      alert('Please select or add a delivery address.');
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="order-details-container">
      <div className="main-content">
       
       
       
    {/* Products Section */}
{/* Products Section */}
{/* Products Section */}
<div className="products-section">
  <h2 className="section-title">Products</h2>
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-item">
        <div className="product-details">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et velit euismod, aliquet sapien sit amet, dapibus velit.
            </p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




        {/* Address Section */}
        <div className="address-section">
          <h2 className="section-title">Choose Delivery Address</h2>
          <select value={selectedAddress} onChange={handleAddressChange} className="address-select">
            <option value="">Select an address</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.address}
              </option>
            ))}
          </select>
          <button onClick={() => setShowAddressForm(!showAddressForm)} className="add-address-button">
            {showAddressForm ? 'Cancel' : (editingAddress ? 'Edit Address' : 'Add New Address')}
          </button>
          {showAddressForm && (
            <div className="address-form">
              <form>
                <input type="text" name="name" placeholder="Customer Name" value={newAddress.name} onChange={handleInputChange} className="input-field" />
                <input type="text" name="houseNo" placeholder="House No" value={newAddress.houseNo} onChange={handleInputChange} className="input-field" />
                <input type="text" name="street" placeholder="Street Name" value={newAddress.street} onChange={handleInputChange} className="input-field" />
                <input type="text" name="area" placeholder="Area/Region" value={newAddress.area} onChange={handleInputChange} className="input-field" />
                <input type="text" name="city" placeholder="City" value={newAddress.city} onChange={handleInputChange} className="input-field" />
                <input type="text" name="district" placeholder="District" value={newAddress.district} onChange={handleInputChange} className="input-field" />
                <input type="text" name="state" placeholder="State" value={newAddress.state} onChange={handleInputChange} className="input-field" />
                <input type="text" name="pinCode" placeholder="Pin Code" value={newAddress.pinCode} onChange={handleInputChange} className="input-field" />
                <button type="button" onClick={handleAddOrUpdateAddress} className="save-address-button">
                  {editingAddress ? 'Update Address' : 'Add Address'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h2 className="section-title">Order Summary</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title} - ${product.price}</p>
          </div>
        ))}
        <p className="summary-total">Subtotal: ${totalPrice}</p>
        {discount > 0 && <p className="summary-discount">Discount: -${discount.toFixed(2)}</p>}
        <p className="summary-final">Total Price: ${finalPrice.toFixed(2)}</p>
        <button onClick={handlePayment} className="pay-button">Pay (${finalPrice.toFixed(2)})</button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;