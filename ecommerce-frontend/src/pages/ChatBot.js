import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import './ChatBot.css';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import axios from 'axios';


const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm ShopEase. How can I assist you today?", sender: "bot" },
        { text: "Can I know your name?", sender: "bot" }
    ]);
    const navigate = useNavigate();
    const { userId } = useContext(UserContext);
    const { cartItems, wishlistItems } = useContext(CartContext);
    const [orders, setOrders] = useState([]);
    const [input, setInput] = useState('');
    const [isNameAsked, setIsNameAsked] = useState(true);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showProfileForm, setShowProfileForm] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showWl, setShowWl] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [addressData, setAddressData] = useState({
        addressLine1: '',
        addressLine2: '',
        pincode: '',
        city: '',
        state: '',
        country: 'India'
    });
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Sample orders data
    useEffect(() => {
        const getOrders = async () => {

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
    });



    const chatEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);

        if (isNameAsked) {
            setTimeout(() => {
                const botReply = {
                    text: `Nice to meet you! How can I assist you today? Here are some options:`,
                    sender: "bot"
                };
                setMessages(prevMessages => [
                    ...prevMessages,
                    botReply,
                    {
                        text: (
                            <div className="options-container">
                                <button className="option-button" onClick={handleProfileClick}>User Profile</button>
                                <button className="option-button" onClick={handleAddressClick}>Update Address</button>
                                <button className="option-button" onClick={handleRegisterClick}>Register</button>
                                <button className="option-button" onClick={handleOrdersClick}>My Orders</button>
                                <button className="option-button" onClick={handleWlClick}>My Wishlist</button>
                                <button className="option-button" onClick={handleCartClick}>My Cart</button>
                            </div>
                        ),
                        sender: "bot"
                    }
                ]);
                setIsNameAsked(false);
            }, 1000);
        } else {
            setTimeout(() => {
                const botReply = { text: "Thank you for your message! We'll get back to you soon.", sender: "bot" };
                setMessages(prevMessages => [...prevMessages, botReply]);
            }, 1000);
        }

        setInput('');
    };

    const handleProfileClick = () => {
        setShowProfileForm(true);
        setShowAddressForm(false);
        setShowRegisterForm(false);
        setShowOrders(false);
        setShowCart(false);
        setShowWl(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Please fill out your profile details:", sender: "bot" }
        ]);
    };

    const handleAddressClick = () => {
        setShowProfileForm(false);
        setShowAddressForm(true);
        setShowRegisterForm(false);
        setShowOrders(false);
        setShowCart(false);
        setShowWl(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Please fill out your address details:", sender: "bot" }
        ]);
    };

    const handleRegisterClick = () => {
        setShowProfileForm(false);
        setShowAddressForm(false);
        setShowRegisterForm(true);
        setShowOrders(false);
        setShowCart(false);
        setShowWl(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Please fill out the registration form:", sender: "bot" }
        ]);
    };

    const handleOrdersClick = () => {
        setShowProfileForm(false);
        setShowAddressForm(false);
        setShowRegisterForm(false);
        setShowOrders(true);
        setShowCart(false);
        setShowWl(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Here are your previous orders:", sender: "bot" },
            ...orders.map(order => ({
                text: `ID: ${order.orderId}${order.orderDate}, Status: ${order.status}, Total: ${order.totalAmount}`,
                sender: "bot"
            }))
        ]);
    };

    const handleWlClick = () => {
        setShowProfileForm(false);
        setShowAddressForm(false);
        setShowRegisterForm(false);
        setShowOrders(false);
        setShowCart(false);
        setShowWl(true);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Here are your wishlist items:", sender: "bot" },
            ...wishlistItems.map(order => ({
                text: `Item: ${order.product.name}, Price: ${order.product.price}`,
                sender: "bot"
            }))
        ]);
    };


    const handleCartClick = () => {
        setShowProfileForm(false);
        setShowAddressForm(false);
        setShowRegisterForm(false);
        setShowOrders(false);
        setShowCart(true);
        setShowWl(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: "Here are your Cart Items:", sender: "bot" },
            ...cartItems.map(order => ({
                text: `Product name: ${order.product.name}, Price: ${order.product.price}, Quantity: ${order.quantity}`,
                sender: "bot"
            }))
        ]);
    };



    const handleAddressFormSubmit = (e) => {
        e.preventDefault();
        setMessages(prevMessages => [
            ...prevMessages,
            { text: `Address updated successfully: ${addressData.addressLine1}, ${addressData.city}, ${addressData.state}, ${addressData.country}, Pincode: ${addressData.pincode}`, sender: "bot" }
        ]);
        setShowAddressForm(false);
    };

    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();
        setMessages(prevMessages => [
            ...prevMessages,
            { text: `Registration successful for ${registerData.firstName} ${registerData.lastName} (${registerData.email})`, sender: "bot" }
        ]);
        setShowRegisterForm(false);
    };

    const handleInputChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleAddressChange = (e) => {
        setAddressData({ ...addressData, [e.target.name]: e.target.value });
    };

    return (
        <div className="chatbot-container">
            <ChatHeader />
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}

                {/* Profile Form */}
                {showProfileForm && (
                    <div className="form-container">
                        <form>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <button type="submit" className="form-submit-button">Submit</button>
                        </form>
                    </div>
                )}

                {/* Address Form */}
                {showAddressForm && (
                    <div className="form-container">
                        <form onSubmit={handleAddressFormSubmit}>
                            <input
                                type="text"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                value={addressData.addressLine1}
                                onChange={handleAddressChange}
                                required
                            />
                            <input
                                type="text"
                                name="addressLine2"
                                placeholder="Address Line 2"
                                value={addressData.addressLine2}
                                onChange={handleAddressChange}
                            />
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                value={addressData.pincode}
                                onChange={handleAddressChange}
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={addressData.city}
                                onChange={handleAddressChange}
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={addressData.state}
                                onChange={handleAddressChange}
                                required
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={addressData.country}
                                onChange={handleAddressChange}
                                disabled
                            />
                            <button type="submit" className="form-submit-button">Submit</button>
                        </form>
                    </div>
                )}

                {/* Register Form */}
                {showRegisterForm && (
                    <div className="form-container">
                        <form onSubmit={handleRegisterFormSubmit}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={registerData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={registerData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={registerData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={registerData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={registerData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit" className="form-submit-button">Submit</button>
                        </form>
                    </div>
                )}


                <div ref={chatEndRef} />
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="chat-input"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default ChatBot;

