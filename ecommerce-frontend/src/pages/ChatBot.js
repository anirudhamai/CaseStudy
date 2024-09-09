// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import ChatHeader from './ChatHeader';
// import './Chatbot.css';

// const ChatBot = () => {
//     const [messages, setMessages] = useState([
//         { text: "Hi! I'm ShopEase. How can I assist you today?", sender: "bot" },
//         { text: "Can I know your name?", sender: "bot" }
//     ]);
//     const [input, setInput] = useState('');
//     const [userName, setUserName] = useState('');
//     const [isNameAsked, setIsNameAsked] = useState(true);
//     const chatEndRef = useRef(null);

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     const handleSend = () => {
//         if (input.trim() === '') return;

//         const newMessage = { text: input, sender: "user" };
//         setMessages([...messages, newMessage]);

//         if (isNameAsked) {
//             setUserName(input);
//             setTimeout(() => {
//                 const botReply = { 
//                     text: `Nice to meet you, ${input}! How can I assist you today? Here are some options:`, 
//                     sender: "bot" 
//                 };
//                 setMessages(prevMessages => [
//                     ...prevMessages, 
//                     botReply, 
//                     {
//                         text: (
//                             <div className="options-container">
//                                 <button className="option-button" onClick={() => handleOptionClick('Categories')}>Categories</button>
//                                 <Link to="/profile"><button className="option-button">User Profile</button></Link>
//                                 <Link to="/update-address"><button className="option-button">Update Address</button></Link>
//                                 <Link to="/wishlist"><button className="option-button">My Wishlist</button></Link>
//                                 <Link to="/cart"><button className="option-button">My Cart</button></Link>
//                                 <Link to="/register"><button className="option-button">New User (Register Page)</button></Link>
//                                 <Link to="/login"><button className="option-button">Login</button></Link>
//                             </div>
//                         ),
//                         sender: "bot"
//                     }
//                 ]);
//                 setIsNameAsked(false);
//             }, 1000);
//         } else {
//             setTimeout(() => {
//                 const botReply = { text: "Thank you for your message! We'll get back to you soon.", sender: "bot" };
//                 setMessages(prevMessages => [...prevMessages, botReply]);
//             }, 1000);
//         }

//         setInput('');
//     };

//     const handleOptionClick = (option) => {
//         if (option === 'Categories') {
//             const categoryMessage = {
//                 text: (
//                     <div className="categories-container">
//                         <Link to="/categories/groceries"><button className="category-button">Groceries</button></Link>
//                         <Link to="/categories/books"><button className="category-button">Books</button></Link>
//                         <Link to="/categories/electronics"><button className="category-button">Electronics</button></Link>
//                         <Link to="/categories/fashion"><button className="category-button">Fashion</button></Link>
//                         <Link to="/categories/beautycare"><button className="category-button">Beauty Care</button></Link>
//                         <Link to="/categories/sports"><button className="category-button">Sports</button></Link>

//                     </div>
//                 ),
//                 sender: "bot"
//             };
//             setMessages(prevMessages => [...prevMessages, categoryMessage]);
//         }
//         addThankYouMessage();
//     };

//     const addThankYouMessage = () => {
//         const thankYouMessage = { text: "Thank you for your response.", sender: "bot" };
//         setMessages(prevMessages => [...prevMessages, thankYouMessage]);
//     };

//     return (
//         <div className="chatbot-container">
//           <ChatHeader />
//             <div className="chat-window">
//                 {messages.map((msg, index) => (
//                     <div key={index} className={`chat-message ${msg.sender}`}>
//                         {msg.text}
//                     </div>
//                 ))}
//                 <div ref={chatEndRef} />
//             </div>
//             <div className="chat-input-container">
//                 <input 
//                     type="text" 
//                     value={input} 
//                     onChange={(e) => setInput(e.target.value)} 
//                     placeholder="Type a message..." 
//                     className="chat-input"
//                 />
//                 <button onClick={handleSend} className="send-button">Send</button>
//             </div>
//         </div>
//     );
// };

// export default ChatBot;

//modified
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import './Chatbot.css';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm ShopEase. How can I assist you today?", sender: "bot" },
        { text: "Can I know your name?", sender: "bot" }
    ]);
    const [input, setInput] = useState('');
    const [userName, setUserName] = useState('');
    const [isNameAsked, setIsNameAsked] = useState(true);
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
            setUserName(input);
            setTimeout(() => {
                const botReply = { 
                    text: `Nice to meet you, ${input}! How can I assist you today? Here are some options:`, 
                    sender: "bot" 
                };
                setMessages(prevMessages => [
                    ...prevMessages, 
                    botReply, 
                    {
                        text: (
                            <div className="options-container">
                                <button className="option-button" onClick={() => handleOptionClick('Categories')}>Categories</button>
                                <Link to="/profile"><button className="option-button">User Profile</button></Link>
                                <Link to="/update-address"><button className="option-button">Update Address</button></Link>
                                <Link to="/wishlist"><button className="option-button">My Wishlist</button></Link>
                                <Link to="/cart"><button className="option-button">My Cart</button></Link>
                                <Link to="/register"><button className="option-button">New User </button></Link>
                                <Link to="/login"><button className="option-button">Login</button></Link>
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

    const handleOptionClick = (option) => {
        if (option === 'Categories') {
            const categoryMessage = {
                text: (
                    <div className="categories-container">
                        <button className="category-button" onClick={() => handleSubcategoryClick('Groceries')}>Groceries</button>
                        <button className="category-button" onClick={() => handleSubcategoryClick('Books')}>Books</button>
                        <button className="category-button" onClick={() => handleSubcategoryClick('Electronics')}>Electronics</button>
                        <button className="category-button" onClick={() => handleSubcategoryClick('Fashion')}>Fashion</button>
                        <button className="category-button" onClick={() => handleSubcategoryClick('Beauty Care')}>Beauty Care</button>
                        <button className="category-button" onClick={() => handleSubcategoryClick('Sports')}>Sports</button>
                    </div>
                ),
                sender: "bot"
            };
            setMessages(prevMessages => [...prevMessages, categoryMessage]);
            addThankYouMessage();
        }
    };

    const handleSubcategoryClick = (category) => {
        let subcategories = [];

        if (category === 'Groceries') {
            subcategories = [
                { name: 'Vegetables', link: '/categories/groceries/vegetables' },
                { name: 'Fruits', link: '/categories/groceries/fruits' },
                { name: 'Dairy', link: '/categories/groceries/dairy' },
                { name: 'Snacks', link: '/categories/groceries/snacks' },
            ];
        } else if (category === 'Electronics') {
            subcategories = [
                { name: 'Mobiles', link: '/categories/electronics/mobiles' },
                { name: 'Laptops', link: '/categories/electronics/laptops' },
                { name: 'Televisions', link: '/categories/electronics/televisions' },
                { name: 'Cameras', link: '/categories/electronics/cameras' },
            ];
        } else if (category === 'Fashion') {
            subcategories = [
                { name: 'Men', link: '/categories/fashion/men' },
                { name: 'Women', link: '/categories/fashion/women' },
                { name: 'Kids', link: '/categories/fashion/kids' },
                { name: 'Accessories', link: '/categories/fashion/accessories' },
            ];
        } else if (category === 'Books') {
            subcategories = [
                { name: 'Fiction', link: '/categories/books/fiction' },
                { name: 'Non-fiction', link: '/categories/books/non-fiction' },
                { name: 'Comics', link: '/categories/books/comics' },
                { name: 'Textbooks', link: '/categories/books/textbooks' },
            ];
        } else if (category === 'Beauty Care') {
            subcategories = [
                { name: 'Skincare', link: '/categories/beautycare/skincare' },
                { name: 'Haircare', link: '/categories/beautycare/haircare' },
                { name: 'Makeup', link: '/categories/beautycare/makeup' },
                { name: 'Fragrances', link: '/categories/beautycare/fragrances' },
            ];
        } else if (category === 'Sports') {
            subcategories = [
                { name: 'Fitness', link: '/categories/sports/fitness' },
                { name: 'Camping', link: '/categories/sports/camping' },
                { name: 'Cycling', link: '/categories/sports/cycling' },
                { name: 'Team Sports', link: '/categories/sports/team-sports' },
            ];
        }

        const subcategoryMessage = {
            text: (
                <div className="categories-container">
                    {subcategories.map((subcat) => (
                        <Link to={subcat.link} key={subcat.name}>
                            <button className="category-button">{subcat.name}</button>
                        </Link>
                    ))}
                </div>
            ),
            sender: "bot"
        };
        setMessages(prevMessages => [...prevMessages, subcategoryMessage]);
    };

    const addThankYouMessage = () => {
        const thankYouMessage = { text: "Thank you for your response.", sender: "bot" };
        setMessages(prevMessages => [...prevMessages, thankYouMessage]);
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

