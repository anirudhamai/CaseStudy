
import React, { useState, useContext, useEffect } from 'react';
// import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import './OrdersPage.css'; // Make sure the CSS file is imported
import axios from 'axios';


function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [disabledOrders, setDisabledOrders] = useState(new Set());
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
      // console.log(userId);
      try {
        const url = `http://localhost:5001/gateway/order/${userId}`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data.$values);
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
  }, [userId]);


  useEffect(() => {
    if (orders.length != 0) {
      setLoading(false);
    }
    else {
      // console.log("empty order");
    }
  }, [orders]);


  const handleCancel = async (order) => {
    if (order.status != "Cancelled" && order.status != "Delivered" && order.status != "Completed") {
      const isConfirmed = window.confirm("Are you sure you want to cancel this order?");
      if (isConfirmed) {
        try {
          console.log(order.status);
          const url = `http://localhost:5001/gateway/order`;

          const response = await axios.put(url, order.orderId, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          if (response.status == 200) {
            setOrders(prev => prev.map(p => p.orderId === order.orderId ? { ...p, status: "Cancelled" } : p));
            setDisabledOrders(prev => new Set(prev.add(order.orderId)));
          }
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
    }
    else {
      alert("Order cant be cancelled now");
      setDisabledOrders(prev => new Set(prev.add(order.orderId)));
    }
  }


  const handlePdf = (order) => {
    const blob = new Blob([order.pdf], { type: 'application/pdf' });
    const urlBlob = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = `Order_${order.orderId}_Bill.pdf`; // Set the file name
    a.click();
    window.URL.revokeObjectURL(urlBlob);
  }


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
        {loading ? (
          <div className="loading-screen">Loading...</div>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Products</th>
                <th>Total Quantity</th>
                <th>Total Price</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>View PDF</th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.$id}>
                  <td>{order.orderId}
                    {order.orderDate}
                  </td>
                  <td>
                    {order.orderItems.$values.map(orderItem => (
                      <div key={orderItem.$id} className="product-info">
                        {orderItem.name} ({orderItem.quantity})
                      </div>
                    ))}
                  </td>
                  <td>
                    {order.orderItems.$values.reduce((total, product) => total + product.quantity, 0)}
                  </td>
                  <td>₹{order.totalAmount.toFixed(2)}</td>
                  <td>{order.payments.$values[0].paymentMethod}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handlePdf(order)} className="details-link">
                      Bill
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleCancel(order)}
                      disabled={["Cancelled", "Delivered", "Completed"].includes(order.status) || disabledOrders.has(order.orderId)}
                      className={`details-link ${["Cancelled", "Delivered", "Completed"].includes(order.status) || disabledOrders.has(order.orderId) ? 'disabled' : ''}`}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;
