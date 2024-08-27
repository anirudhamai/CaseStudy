// src/pages/PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css'; // Add styles for payment page

function PaymentPage() {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '1234 5678 9012 3456',
    expirationDate: '12/24',
    cvv: '123',
    amount: '100.00'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert('Payment processed successfully!');
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default PaymentPage;
