// old code

// import React, { useState, useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import './PaymentPage.css';

// function PaymentPage() {
//   const { cartItems, clearCart, addOrder, getTotalAmount } = useContext(CartContext);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [upiId, setUpiId] = useState('');
//   const [cardDetails, setCardDetails] = useState({ cardHolder: '', cvv: '', cardNumber: '' });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handlePayment = () => {
//     setLoading(true);
//     if (paymentMethod === 'cod') {
//       createOrder('Cash on Delivery');
//     } else if (paymentMethod === 'upi') {
//       if (upiId) {
//         createOrder('UPI Payment');
//       } else {
//         alert('Please enter your UPI ID.');
//         setLoading(false);
//       }
//     } else if (paymentMethod === 'card') {
//       if (cardDetails.cardHolder && cardDetails.cvv && cardDetails.cardNumber) {
//         createOrder('Card Payment');
//       } else {
//         alert('Please fill in all card details.');
//         setLoading(false);
//       }
//     } else {
//       alert('Please select a payment method.');
//       setLoading(false);
//     }
//   };

//   const createOrder = (paymentType) => {
//     const orderDetails = {
//       id: new Date().getTime(), // Generate a unique order ID
//       products: cartItems.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
//       totalPrice: getTotalAmount(),
//       paymentType,
//       status: 'Processing',
//     };

//     addOrder(orderDetails);
//     clearCart();
//     navigate('/order-page');
//   };

//   return (
//     <div className="payment-page">
//       <h2>Select Payment Method</h2>
//       <div className="payment-methods">
//         <div className="payment-option">
//           <input 
//             type="radio" 
//             id="cod" 
//             name="payment-method" 
//             value="cod" 
//             checked={paymentMethod === 'cod'} 
//             onChange={(e) => setPaymentMethod(e.target.value)} 
//           />
//           <label htmlFor="cod">Cash on Delivery</label>
//         </div>
//         <div className="payment-option">
//           <input 
//             type="radio" 
//             id="upi" 
//             name="payment-method" 
//             value="upi" 
//             checked={paymentMethod === 'upi'} 
//             onChange={(e) => setPaymentMethod(e.target.value)} 
//           />
//           <label htmlFor="upi">UPI</label>
//           {paymentMethod === 'upi' && (
//             <input 
//               type="text" 
//               placeholder="Enter UPI ID" 
//               value={upiId} 
//               onChange={(e) => setUpiId(e.target.value)} 
//               aria-label="UPI ID"
//             />
//           )}
//         </div>
//         <div className="payment-option">
//           <input 
//             type="radio" 
//             id="card" 
//             name="payment-method" 
//             value="card" 
//             checked={paymentMethod === 'card'} 
//             onChange={(e) => setPaymentMethod(e.target.value)} 
//           />
//           <label htmlFor="card">Debit/Credit Card</label>
//           {paymentMethod === 'card' && (
//             <div className="card-details">
//               <input 
//                 type="text" 
//                 placeholder="Card Holder Name" 
//                 value={cardDetails.cardHolder} 
//                 onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })} 
//                 aria-label="Card Holder Name"
//               />
//               <input 
//                 type="text" 
//                 placeholder="Card Number" 
//                 value={cardDetails.cardNumber} 
//                 onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} 
//                 aria-label="Card Number"
//               />
//               <input 
//                 type="text" 
//                 placeholder="CVV" 
//                 value={cardDetails.cvv} 
//                 onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} 
//                 aria-label="Card CVV"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <button 
//         className="pay-now-button" 
//         onClick={handlePayment} 
//         disabled={loading}
//       >
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </div>
//   );
// }

// export default PaymentPage;



import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';  // Importing the CSS

function PaymentPage() {
  const { cartItems, clearCart, addOrder, getTotalAmount } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardHolder: '', cvv: '', cardNumber: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);
    if (paymentMethod === 'cod') {
      createOrder('Cash on Delivery');
    } else if (paymentMethod === 'upi') {
      if (upiId) {
        createOrder('UPI Payment');
      } else {
        alert('Please enter your UPI ID.');
        setLoading(false);
      }
    } else if (paymentMethod === 'card') {
      if (cardDetails.cardHolder && cardDetails.cvv && cardDetails.cardNumber) {
        createOrder('Card Payment');
      } else {
        alert('Please fill in all card details.');
        setLoading(false);
      }
    } else {
      alert('Please select a payment method.');
      setLoading(false);
    }
  };

  const createOrder = (paymentType) => {
    const orderDetails = {
      id: new Date().getTime(), // Generate a unique order ID
      products: cartItems.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
      totalPrice: getTotalAmount(),
      paymentType,
      status: 'Processing',
    };

    addOrder(orderDetails);
    clearCart();
    navigate('/order-page');
  };

  return (
    <div className="payment-page-container">
    <div className="payment-page">
      <h2>Select Payment Method</h2>
      <div className="payment-methods">
        <div className="payment-option">
          <input 
            type="radio" 
            id="cod" 
            name="payment-method" 
            value="cod" 
            checked={paymentMethod === 'cod'} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="upi" 
            name="payment-method" 
            value="upi" 
            checked={paymentMethod === 'upi'} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          <label htmlFor="upi">UPI</label>
          {paymentMethod === 'upi' && (
            <input 
              type="text" 
              placeholder="Enter UPI ID" 
              value={upiId} 
              onChange={(e) => setUpiId(e.target.value)} 
              aria-label="UPI ID"
            />
          )}
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="card" 
            name="payment-method" 
            value="card" 
            checked={paymentMethod === 'card'} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          <label htmlFor="card">Debit/Credit Card</label>
          {paymentMethod === 'card' && (
            <div className="card-details">
              <input 
                type="text" 
                placeholder="Card Holder Name" 
                value={cardDetails.cardHolder} 
                onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })} 
                aria-label="Card Holder Name"
              />
              <input 
                type="text" 
                placeholder="Card Number" 
                value={cardDetails.cardNumber} 
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} 
                aria-label="Card Number"
              />
              <input 
                type="text" 
                placeholder="CVV" 
                value={cardDetails.cvv} 
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} 
                aria-label="Card CVV"
              />
            </div>
          )}
        </div>
      </div>
      <button 
        className="pay-now-button" 
        onClick={handlePayment} 
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
    </div>
  );
}

export default PaymentPage;
