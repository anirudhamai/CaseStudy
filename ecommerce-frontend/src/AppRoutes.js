// src/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import ProductsPage from './pages/ProductsPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import PaymentPage from './pages/PaymentPage';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import AddressPage from './pages/AddressPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/address" element={<AddressPage />} />

        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <UserPage />
            </Layout>
          }
        />
        <Route
          path="/myorders"
          element={
            <Layout>
              <OrdersPage />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <PaymentPage />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />

        <Route
          path="/wishlist"
          element={
            <Layout>
              <WishlistPage />
            </Layout>
          }
        />


      </Routes>
    </Router>
  );
}

export default AppRoutes;
