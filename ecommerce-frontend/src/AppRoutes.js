// src/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import ElectronicsPage from './pages/ElectronicsPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import PaymentPage from './pages/PaymentPage';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import AddressPage from './pages/AddressPage';
import ChatBot from './pages/ChatBot';



function AppRoutes() {
  return (
    <CartProvider>
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
          path="/category/electronics"
          element={
            <Layout>
              <ElectronicsPage />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout>
              <UserPage />
            </Layout>
          }
        />
        <Route
          path="/order-page"
          element={
            <Layout>
              <OrdersPage />
            </Layout>
          }
        />
        <Route
          path="/payment-page"
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

      <Route path="/chatbot" element={<ChatBot />} />


      </Routes>
    </Router>

    </CartProvider>
  );
}

export default AppRoutes;
