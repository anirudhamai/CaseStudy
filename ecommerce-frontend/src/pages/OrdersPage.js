import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrdersPage.css'; // For custom styles

function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: 'Sample Product 1',
      quantity: 2,
      totalPrice: 59.98,
      status: 'Shipped'
    },
    {
      id: 2,
      productName: 'Sample Product 2',
      quantity: 1,
      totalPrice: 29.99,
      status: 'Processing'
    },
    {
      id: 3,
      productName: 'Sample Product 3',
      quantity: 3,
      totalPrice: 89.97,
      status: 'Delivered'
    }
  ]);

  return (
    <div className="orders-container">
      <h2 className="page-title">Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <Link to={`/orders/${order.id}`} className="details-link">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
