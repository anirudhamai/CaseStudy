
import React, { useState, useContext, useEffect } from 'react';
// import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import './OrdersPage.css'; // Make sure the CSS file is imported
import axios from 'axios';


function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
      // console.log(userId);
      try {
        const url = `http://localhost:5120/api/Order/${userId}`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // console.log(response.data.$values);
        setOrders(response.data.$values);
        // console.log(orders);
      }
      catch (error) {
        if (error.status === 401) {
          alert("Your token expired or you are not authorized for this page");
          localStorage.removeItem('token');
          navigate('/login');
        }
        else if (error.code == "ERR_NETWORK") {
          alert(error.message);
          localStorage.removeItem('token');
          navigate('/login');
          console.log(error.message);
        }
        console.error('Error fetching products', error);
      }
    }
    getOrders();
  }, userId);


  useEffect(() => {
    if (orders.length != 0) {
      // console.log(orders);
    }
    else {
      console.log("empty order");
    }
  }, orders);


  if (!orders || orders.length === 0) {
    return (
      <div className="orders-container">
        <h2 className="page-title">Orders</h2>
        <p className="no-orders-message">You have no orders yet. Check back later!</p>
      </div>
    );
  }

  return (
    // <div className="orders-container">
    <div className="background">
      <div className="order-page">
        <h2 className="page-title">Order History</h2>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.$id}>
                <td>{order.orderId}
                  {order.orderDate}
                </td>
                <td>
                  {/* {console.log(order.orderItems.$values)} */}
                  {order.orderItems.$values.map(orderItem => (
                    <div key={orderItem.$id} className="product-info">
                      {orderItem.product.name} ({orderItem.quantity})
                    </div>
                  ))}
                </td>
                <td>
                  {order.orderItems.$values.reduce((total, product) => total + product.quantity, 0)}
                </td>
                <td>₹{order.totalAmount.toFixed(2)}</td>
                <td>{"Cash on delivery"/*order.paymentType*/}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <Link to={`/orders/${order.id}`} className="details-link">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersPage;
