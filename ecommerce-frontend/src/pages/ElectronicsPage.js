// import React, { useState, useEffect, useContext } from 'react';
// import { FaStar, FaCartPlus, FaHeart, FaShoppingBag } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import { CartContext } from '../context/CartContext';


// function ElectronicsPage() {
//   const { cartItems, addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [ratings, setRatings] = useState({});
//   const [newReview, setNewReview] = useState('');
//   const navigate = useNavigate();

  // const sampleProducts = [
  //   {
  //     id: 1,
  //     name: 'Smartphone XYZ',
  //     description: 'A high-quality smartphone with excellent features.',
  //     price: 499.99,
  //     originalPrice: 599.99,
  //     discount: 17,
  //     image: 'https://via.placeholder.com/300x200?text=Smartphone+XYZ',
  //     reviews: [
  //       { id: 1, content: 'Great phone with amazing battery life!', rating: 5 },
  //       { id: 2, content: 'Good value for the price.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Wireless Headphones ABC',
  //     description: 'Noise-cancelling over-ear wireless headphones.',
  //     price: 149.99,
  //     originalPrice: 199.99,
  //     discount: 25,
  //     image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones+ABC',
  //     reviews: [
  //       { id: 1, content: 'Excellent sound quality.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'Smartwatch 123',
  //     description: 'Feature-packed smartwatch with fitness tracking.',
  //     price: 99.99,
  //     originalPrice: 129.99,
  //     discount: 23,
  //     image: 'https://via.placeholder.com/300x200?text=Smartwatch+123',
  //     reviews: [
  //       { id: 1, content: 'Very useful for tracking workouts.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'Bluetooth Speaker DEF',
  //     description: 'Portable Bluetooth speaker with deep bass.',
  //     price: 59.99,
  //     originalPrice: 79.99,
  //     discount: 25,
  //     image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker+DEF',
  //     reviews: [
  //       { id: 1, content: 'Great for outdoor parties!', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     name: 'Laptop GHI',
  //     description: 'Lightweight laptop with powerful performance.',
  //     price: 899.99,
  //     originalPrice: 999.99,
  //     discount: 10,
  //     image: 'https://via.placeholder.com/300x200?text=Laptop+GHI',
  //     reviews: [
  //       { id: 1, content: 'Fast and reliable.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     name: 'Digital Camera JKL',
  //     description: 'High-resolution digital camera for photography enthusiasts.',
  //     price: 299.99,
  //     originalPrice: 349.99,
  //     discount: 14,
  //     image: 'https://via.placeholder.com/300x200?text=Digital+Camera+JKL',
  //     reviews: [
  //       { id: 1, content: 'Captures stunning photos.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 7,
  //     name: 'Tablet MNO',
  //     description: 'Compact tablet perfect for media consumption.',
  //     price: 199.99,
  //     originalPrice: 249.99,
  //     discount: 20,
  //     image: 'https://via.placeholder.com/300x200?text=Tablet+MNO',
  //     reviews: [
  //       { id: 1, content: 'Great display and battery life.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 8,
  //     name: 'Gaming Console PQR',
  //     description: 'Next-gen gaming console with immersive graphics.',
  //     price: 399.99,
  //     originalPrice: 499.99,
  //     discount: 20,
  //     image: 'https://via.placeholder.com/300x200?text=Gaming+Console+PQR',
  //     reviews: [
  //       { id: 1, content: 'Amazing gaming experience!', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 9,
  //     name: '4K LED TV STU',
  //     description: 'Ultra HD 4K LED TV with vibrant colors.',
  //     price: 599.99,
  //     originalPrice: 699.99,
  //     discount: 14,
  //     image: 'https://via.placeholder.com/300x200?text=4K+LED+TV+STU',
  //     reviews: [
  //       { id: 1, content: 'Crystal clear picture quality.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 10,
  //     name: 'Home Theater System VWX',
  //     description: 'Surround sound home theater system for immersive audio.',
  //     price: 249.99,
  //     originalPrice: 299.99,
  //     discount: 17,
  //     image: 'https://via.placeholder.com/300x200?text=Home+Theater+System+VWX',
  //     reviews: [
  //       { id: 1, content: 'Great sound quality.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 11,
  //     name: 'Fitness Tracker YZA',
  //     description: 'Track your daily activities and health metrics.',
  //     price: 49.99,
  //     originalPrice: 59.99,
  //     discount: 17,
  //     image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker+YZA',
  //     reviews: [
  //       { id: 1, content: 'Helps me stay active.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 12,
  //     name: 'Drone BCD',
  //     description: 'High-performance drone with camera for aerial photography.',
  //     price: 349.99,
  //     originalPrice: 399.99,
  //     discount: 13,
  //     image: 'https://via.placeholder.com/300x200?text=Drone+BCD',
  //     reviews: [
  //       { id: 1, content: 'Fun to fly and great footage.', rating: 5 }
  //     ]
  //   },
  //   // New Products
  //   {
  //     id: 13,
  //     name: 'Smart Home Hub EFG',
  //     description: 'Central control for all your smart home devices.',
  //     price: 89.99,
  //     originalPrice: 109.99,
  //     discount: 18,
  //     image: 'https://via.placeholder.com/300x200?text=Smart+Home+Hub+EFG',
  //     reviews: [
  //       { id: 1, content: 'Makes home automation easy.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 14,
  //     name: 'Electric Toothbrush HIJ',
  //     description: 'Powerful electric toothbrush with multiple settings.',
  //     price: 59.99,
  //     originalPrice: 79.99,
  //     discount: 25,
  //     image: 'https://via.placeholder.com/300x200?text=Electric+Toothbrush+HIJ',
  //     reviews: [
  //       { id: 1, content: 'Excellent cleaning performance.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 15,
  //     name: 'Portable SSD KLM',
  //     description: 'High-speed portable SSD with 1TB capacity.',
  //     price: 149.99,
  //     originalPrice: 179.99,
  //     discount: 17,
  //     image: 'https://via.placeholder.com/300x200?text=Portable+SSD+KLM',
  //     reviews: [
  //       { id: 1, content: 'Fast and reliable storage.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 16,
  //     name: 'Smart Light Bulbs NOP',
  //     description: 'Set of smart light bulbs with adjustable colors.',
  //     price: 34.99,
  //     originalPrice: 44.99,
  //     discount: 22,
  //     image: 'https://via.placeholder.com/300x200?text=Smart+Light+Bulbs+NOP',
  //     reviews: [
  //       { id: 1, content: 'Perfect for creating ambiance.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 17,
  //     name: 'Robotic Vacuum Cleaner QRS',
  //     description: 'Automatic vacuum cleaner with smart navigation.',
  //     price: 299.99,
  //     originalPrice: 349.99,
  //     discount: 14,
  //     image: 'https://via.placeholder.com/300x200?text=Robotic+Vacuum+Cleaner+QRS',
  //     reviews: [
  //       { id: 1, content: 'Cleans efficiently with minimal noise.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 18,
  //     name: 'Smart Thermostat TUV',
  //     description: 'Energy-efficient smart thermostat for home climate control.',
  //     price: 129.99,
  //     originalPrice: 159.99,
  //     discount: 19,
  //     image: 'https://via.placeholder.com/300x200?text=Smart+Thermostat+TUV',
  //     reviews: [
  //       { id: 1, content: 'Easy to use and energy-saving.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 19,
  //     name: 'Wireless Charger WXY',
  //     description: 'Fast wireless charger compatible with all Qi-enabled devices.',
  //     price: 29.99,
  //     originalPrice: 39.99,
  //     discount: 25,
  //     image: 'https://via.placeholder.com/300x200?text=Wireless+Charger+WXY',
  //     reviews: [
  //       { id: 1, content: 'Charges quickly and efficiently.', rating: 5 }
  //     ]
  //   },
  //   {
  //     id: 20,
  //     name: 'Action Camera YZ1',
  //     description: 'Compact action camera for capturing high-quality video.',
  //     price: 199.99,
  //     originalPrice: 249.99,
  //     discount: 20,
  //     image: 'https://via.placeholder.com/300x200?text=Action+Camera+YZ1',
  //     reviews: [
  //       { id: 1, content: 'Great for adventure videos.', rating: 4 }
  //     ]
  //   },
  //   {
  //     id: 21,
  //     name: 'Bluetooth Earbuds ZAB',
  //     description: 'Wireless earbuds with noise cancellation and long battery life.',
  //     price: 79.99,
  //     originalPrice: 99.99,
  //     discount: 20,
  //     image: 'https://via.placeholder.com/300x200?text=Bluetooth+Earbuds+ZAB',
  //     reviews: [
  //       { id: 1, content: 'Excellent sound quality and comfort.', rating: 5 }
  //     ]
  //   }
  // ];
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setProducts(sampleProducts);
//     };
//     fetchProducts();
//   }, []);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddReview = async (productId) => {
//     const review = newReview.trim();
//     const rating = ratings[productId] || 0;

//     if (!review || rating === 0) {
//       alert('Please provide both a review and a rating.');
//       return;
//     }

//     try {
//       setProducts(products.map(product =>
//         product.id === productId
//           ? { ...product, reviews: [...product.reviews, { id: product.reviews.length + 1, content: review, rating }] }
//           : product
//       ));
//       alert('Review added successfully!');
//       setNewReview('');
//       setRatings({ ...ratings, [productId]: 0 });
//     } catch (error) {
//       console.error(error);
//       alert('Error adding review.');
//     }
//   };

//   const handleAddToWishlist = async (productId) => {
//     try {
//       await axios.post(`/api/products/${productId}/wishlist`);
//       alert('Added to wishlist!');
//       navigate('/wishlist');
//     } catch (error) {
//       console.error(error);
//       alert('Error adding to wishlist.');
//     }
//   };

//   const handleAddToCart = async (productId) => {
//     try {
//       await axios.post(`/api/products/${productId}/cart`);
//       alert('Added to cart!');
//       navigate('/cart');
//     } catch (error) {
//       console.error(error);
//       alert('Error adding to cart.');
//     }
//   };

//   const handleReviewChange = (e) => {
//     setNewReview(e.target.value);
//   };

//   const handleRatingChange = (productId, ratingValue) => {
//     setRatings({ ...ratings, [productId]: ratingValue });
//   };

//   const calculateAverageRating = (reviews) => {
//     if (reviews.length === 0) return 0;
//     const total = reviews.reduce((sum, review) => sum + review.rating, 0);
//     return (total / reviews.length).toFixed(1);
//   };

//   // Inline styles
//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//     gap: '30px',
//     padding: '20px'
//   };

//   const productCardStyle = {
//     background: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     cursor: 'pointer',
//     border: '1px solid #dcdcdc',
//     padding: '10px'
//   };

//   const productImageStyle = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '12px',
//     marginBottom: '15px',
//     transition: 'transform 0.3s ease'
//   };

//   const productImageEnlargedStyle = {
//     transform: 'scale(1.05)' // Slight zoom effect
//   };

//   const ratingStarsStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5px',
//     marginBottom: '10px'
//   };

//   const reviewStarsStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5px'
//   };

//   const priceStyle = {
//     fontSize: '1.5em',
//     color: '#ff5722',
//     fontWeight: 'bold'
//   };

//   const originalPriceStyle = {
//     fontSize: '0.9em',
//     textDecoration: 'line-through',
//     color: '#757575'
//   };

//   return (
//     <div className="electronics-page">
//       <h2 className="page-title">Electronics</h2>
//       {selectedProduct ? (
//         <div className="product-details">
//           <button className="back-button" onClick={() => setSelectedProduct(null)}>← Back to Products</button>
//           <h3>{selectedProduct.name}</h3>
//           <img
//             src={selectedProduct.image}
//             alt={selectedProduct.name}
//             style={{ ...productImageStyle, ...(selectedProduct ? productImageEnlargedStyle : {}) }}
//           />
//           <p>{selectedProduct.description}</p>
//           <p className="price" style={priceStyle}>₹{selectedProduct.price} <span className="original-price" style={originalPriceStyle}>₹{selectedProduct.originalPrice}</span> ({selectedProduct.discount}% off)</p>
//           <div style={ratingStarsStyle}>
//             {[...Array(5)].map((_, index) => (
//               <FaStar
//                 key={index}
//                 color={index + 1 <= Math.round(calculateAverageRating(selectedProduct.reviews)) ? "#ffc107" : "#e4e5e9"}
//                 size={20}
//               />
//             ))}
//             <span className="rating-number">({calculateAverageRating(selectedProduct.reviews)}/5)</span>
//           </div>
//           <div className="action-buttons">
//             <button className="cart-button" onClick={() => handleAddToCart(selectedProduct.id)}><FaCartPlus /> Add to Cart</button>
//             <button className="wishlist-button" onClick={() => handleAddToWishlist(selectedProduct.id)}><FaHeart /> Add to Wishlist</button>
//             <button className="buy-button" onClick={() => alert('Buy Now clicked')}><FaShoppingBag /> Buy Now</button>
//           </div>

//           {/* Reviews Section */}
//           <div className="reviews-section">
//             <h4>Reviews:</h4>
//             {selectedProduct.reviews.length === 0 ? (
//               <p>No reviews yet.</p>
//             ) : (
//               selectedProduct.reviews.map((review) => (
//                 <div key={review.id} className="review-item">
//                   <p>{review.content}</p>
//                   <div style={ratingStarsStyle}>
//                     {[...Array(5)].map((_, index) => (
//                       <FaStar
//                         key={index}
//                         color={index + 1 <= review.rating ? "#ffc107" : "#e4e5e9"}
//                         size={20}
//                       />
//                     ))}
//                     <span className="rating-number">({review.rating}/5)</span>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Add Review Section */}
//           <div className="add-review-section">
//             <h4>Add a Review:</h4>
//             <div style={reviewStarsStyle}>
//               {[...Array(5)].map((_, index) => {
//                 const ratingValue = index + 1;
//                 return (
//                   <label key={index}>
//                     <input
//                       type="radio"
//                       name={`rating-${selectedProduct.id}`}
//                       value={ratingValue}
//                       onClick={() => handleRatingChange(selectedProduct.id, ratingValue)}
//                       style={{ display: 'none' }}
//                     />
//                     <FaStar
//                       color={ratingValue <= (ratings[selectedProduct.id] || 0) ? "#ffc107" : "#e4e5e9"}
//                       size={30}
//                       style={{ cursor: 'pointer' }}
//                     />
//                   </label>
//                 );
//               })}
//             </div>
//             <textarea
//               placeholder="Write your review here..."
//               value={newReview}
//               onChange={handleReviewChange}
//               className="review-textarea"
//               style={{ width: '100%', height: '120px', padding: '12px', border: '1px solid #dcdcdc', borderRadius: '8px', fontSize: '1em', marginBottom: '10px', resize: 'none' }}
//             />
//             <button className="submit-review-button" onClick={() => handleAddReview(selectedProduct.id)}>Submit Review</button>
//           </div>
//         </div>
//       ) : (
//         <div style={gridStyle}>
//           {products.map((product) => (
//             <div key={product.id} style={productCardStyle} onClick={() => handleProductClick(product)}>
//               <img src={product.image} alt={product.name} style={productImageStyle} />
//               <h3>{product.name}</h3>
//               <p className="price" style={priceStyle}>₹{product.price} <span className="original-price" style={originalPriceStyle}>₹{product.originalPrice}</span> ({product.discount}% off)</p>
//               <div style={ratingStarsStyle}>
//                 {[...Array(5)].map((_, index) => (
//                   <FaStar
//                     key={index}
//                     color={index + 1 <= Math.round(calculateAverageRating(product.reviews)) ? "#ffc107" : "#e4e5e9"}
//                     size={20}
//                   />
//                 ))}
//                 <span className="rating-number">({calculateAverageRating(product.reviews)}/5)</span>
//               </div>
//               <button className="cart-button" onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }}><FaCartPlus /> Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ElectronicsPage;


import React, { useState, useEffect, useContext } from 'react';
import { FaStar, FaCartPlus, FaShoppingBag, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



function ElectronicsPage() {
  const { cartItems, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [newReview, setNewReview] = useState('');
  const navigate = useNavigate();

   const sampleProducts = [
    {
      id: 1,
      name: 'Smartphone XYZ',
      description: 'A high-quality smartphone with excellent features.',
      price: 499.99,
      originalPrice: 599.99,
      discount: 17,
      image: 'https://via.placeholder.com/300x200?text=Smartphone+XYZ',
      reviews: [
        { id: 1, content: 'Great phone with amazing battery life!', rating: 5 },
        { id: 2, content: 'Good value for the price.', rating: 4 }
      ]
    },
    {
      id: 2,
      name: 'Wireless Headphones ABC',
      description: 'Noise-cancelling over-ear wireless headphones.',
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones+ABC',
      reviews: [
        { id: 1, content: 'Excellent sound quality.', rating: 5 }
      ]
    },
    {
      id: 3,
      name: 'Smartwatch 123',
      description: 'Feature-packed smartwatch with fitness tracking.',
      price: 99.99,
      originalPrice: 129.99,
      discount: 23,
      image: 'https://via.placeholder.com/300x200?text=Smartwatch+123',
      reviews: [
        { id: 1, content: 'Very useful for tracking workouts.', rating: 4 }
      ]
    },
    {
      id: 4,
      name: 'Bluetooth Speaker DEF',
      description: 'Portable Bluetooth speaker with deep bass.',
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker+DEF',
      reviews: [
        { id: 1, content: 'Great for outdoor parties!', rating: 5 }
      ]
    },
    {
      id: 5,
      name: 'Laptop GHI',
      description: 'Lightweight laptop with powerful performance.',
      price: 899.99,
      originalPrice: 999.99,
      discount: 10,
      image: 'https://via.placeholder.com/300x200?text=Laptop+GHI',
      reviews: [
        { id: 1, content: 'Fast and reliable.', rating: 5 }
      ]
    },
    {
      id: 6,
      name: 'Digital Camera JKL',
      description: 'High-resolution digital camera for photography enthusiasts.',
      price: 299.99,
      originalPrice: 349.99,
      discount: 14,
      image: 'https://via.placeholder.com/300x200?text=Digital+Camera+JKL',
      reviews: [
        { id: 1, content: 'Captures stunning photos.', rating: 5 }
      ]
    },
    {
      id: 7,
      name: 'Tablet MNO',
      description: 'Compact tablet perfect for media consumption.',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      image: 'https://via.placeholder.com/300x200?text=Tablet+MNO',
      reviews: [
        { id: 1, content: 'Great display and battery life.', rating: 4 }
      ]
    },
    {
      id: 8,
      name: 'Gaming Console PQR',
      description: 'Next-gen gaming console with immersive graphics.',
      price: 399.99,
      originalPrice: 499.99,
      discount: 20,
      image: 'https://via.placeholder.com/300x200?text=Gaming+Console+PQR',
      reviews: [
        { id: 1, content: 'Amazing gaming experience!', rating: 5 }
      ]
    },
    {
      id: 9,
      name: '4K LED TV STU',
      description: 'Ultra HD 4K LED TV with vibrant colors.',
      price: 599.99,
      originalPrice: 699.99,
      discount: 14,
      image: 'https://via.placeholder.com/300x200?text=4K+LED+TV+STU',
      reviews: [
        { id: 1, content: 'Crystal clear picture quality.', rating: 5 }
      ]
    },
    {
      id: 10,
      name: 'Home Theater System VWX',
      description: 'Surround sound home theater system for immersive audio.',
      price: 249.99,
      originalPrice: 299.99,
      discount: 17,
      image: 'https://via.placeholder.com/300x200?text=Home+Theater+System+VWX',
      reviews: [
        { id: 1, content: 'Great sound quality.', rating: 4 }
      ]
    },
    {
      id: 11,
      name: 'Fitness Tracker YZA',
      description: 'Track your daily activities and health metrics.',
      price: 49.99,
      originalPrice: 59.99,
      discount: 17,
      image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker+YZA',
      reviews: [
        { id: 1, content: 'Helps me stay active.', rating: 4 }
      ]
    },
    {
      id: 12,
      name: 'Drone BCD',
      description: 'High-performance drone with camera for aerial photography.',
      price: 349.99,
      originalPrice: 399.99,
      discount: 13,
      image: 'https://via.placeholder.com/300x200?text=Drone+BCD',
      reviews: [
        { id: 1, content: 'Fun to fly and great footage.', rating: 5 }
      ]
    },
    // New Products
    {
      id: 13,
      name: 'Smart Home Hub EFG',
      description: 'Central control for all your smart home devices.',
      price: 89.99,
      originalPrice: 109.99,
      discount: 18,
      image: 'https://via.placeholder.com/300x200?text=Smart+Home+Hub+EFG',
      reviews: [
        { id: 1, content: 'Makes home automation easy.', rating: 4 }
      ]
    },
    {
      id: 14,
      name: 'Electric Toothbrush HIJ',
      description: 'Powerful electric toothbrush with multiple settings.',
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      image: 'https://via.placeholder.com/300x200?text=Electric+Toothbrush+HIJ',
      reviews: [
        { id: 1, content: 'Excellent cleaning performance.', rating: 5 }
      ]
    },
    {
      id: 15,
      name: 'Portable SSD KLM',
      description: 'High-speed portable SSD with 1TB capacity.',
      price: 149.99,
      originalPrice: 179.99,
      discount: 17,
      image: 'https://via.placeholder.com/300x200?text=Portable+SSD+KLM',
      reviews: [
        { id: 1, content: 'Fast and reliable storage.', rating: 5 }
      ]
    },
    {
      id: 16,
      name: 'Smart Light Bulbs NOP',
      description: 'Set of smart light bulbs with adjustable colors.',
      price: 34.99,
      originalPrice: 44.99,
      discount: 22,
      image: 'https://via.placeholder.com/300x200?text=Smart+Light+Bulbs+NOP',
      reviews: [
        { id: 1, content: 'Perfect for creating ambiance.', rating: 4 }
      ]
    },
    {
      id: 17,
      name: 'Robotic Vacuum Cleaner QRS',
      description: 'Automatic vacuum cleaner with smart navigation.',
      price: 299.99,
      originalPrice: 349.99,
      discount: 14,
      image: 'https://via.placeholder.com/300x200?text=Robotic+Vacuum+Cleaner+QRS',
      reviews: [
        { id: 1, content: 'Cleans efficiently with minimal noise.', rating: 5 }
      ]
    },
    {
      id: 18,
      name: 'Smart Thermostat TUV',
      description: 'Energy-efficient smart thermostat for home climate control.',
      price: 129.99,
      originalPrice: 159.99,
      discount: 19,
      image: 'https://via.placeholder.com/300x200?text=Smart+Thermostat+TUV',
      reviews: [
        { id: 1, content: 'Easy to use and energy-saving.', rating: 4 }
      ]
    },
    {
      id: 19,
      name: 'Wireless Charger WXY',
      description: 'Fast wireless charger compatible with all Qi-enabled devices.',
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      image: 'https://via.placeholder.com/300x200?text=Wireless+Charger+WXY',
      reviews: [
        { id: 1, content: 'Charges quickly and efficiently.', rating: 5 }
      ]
    },
    {
      id: 20,
      name: 'Action Camera YZ1',
      description: 'Compact action camera for capturing high-quality video.',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      image: 'https://via.placeholder.com/300x200?text=Action+Camera+YZ1',
      reviews: [
        { id: 1, content: 'Great for adventure videos.', rating: 4 }
      ]
    },
    {
      id: 21,
      name: 'Bluetooth Earbuds ZAB',
      description: 'Wireless earbuds with noise cancellation and long battery life.',
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      image: 'https://via.placeholder.com/300x200?text=Bluetooth+Earbuds+ZAB',
      reviews: [
        { id: 1, content: 'Excellent sound quality and comfort.', rating: 5 }
      ]
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(sampleProducts);
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddReview = (productId) => {
    const review = newReview.trim();
    const rating = ratings[productId] || 0;

    if (!review || rating === 0) {
      alert('Please provide both a review and a rating.');
      return;
    }

    setProducts(products.map(product =>
      product.id === productId
        ? { ...product, reviews: [...product.reviews, { id: product.reviews.length + 1, content: review, rating }] }
        : product
    ));
    alert('Review added successfully!');
    setNewReview('');
    setRatings({ ...ratings, [productId]: 0 });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Added to cart!');
    navigate('/cart');
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (productId, ratingValue) => {
    setRatings({ ...ratings, [productId]: ratingValue });
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  // Inline styles
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    padding: '20px'
  };

  const productCardStyle = {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #dcdcdc',
    padding: '10px'
  };

  const productImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '15px',
    transition: 'transform 0.3s ease'
  };

  const productImageEnlargedStyle = {
    transform: 'scale(1.05)' // Slight zoom effect
  };

  const ratingStarsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '10px'
  };

  const reviewStarsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  const priceStyle = {
    fontSize: '1.5em',
    color: '#ff5722',
    fontWeight: 'bold'
  };

  const originalPriceStyle = {
    fontSize: '0.9em',
    textDecoration: 'line-through',
    color: '#757575'
  };

  return (
    <div className="electronics-page">
      <h2 className="page-title">Electronics</h2>
      {selectedProduct ? (
        <div className="product-details">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>← Back to Products</button>
          <h3>{selectedProduct.name}</h3>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ ...productImageStyle, ...(selectedProduct ? productImageEnlargedStyle : {}) }}
          />
          <p>{selectedProduct.description}</p>
          <p className="price" style={priceStyle}>₹{selectedProduct.price} <span className="original-price" style={originalPriceStyle}>₹{selectedProduct.originalPrice}</span> ({selectedProduct.discount}% off)</p>
          <div style={ratingStarsStyle}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index + 1 <= Math.round(calculateAverageRating(selectedProduct.reviews)) ? "#ffc107" : "#e4e5e9"}
                size={20}
              />
            ))}
            <span className="rating-number">({calculateAverageRating(selectedProduct.reviews)}/5)</span>
          </div>
          <div className="action-buttons">
            <button className="cart-button" onClick={() => handleAddToCart(selectedProduct)}><FaCartPlus /> Add to Cart</button>
          
          {/* buy now need to implemented */}

            <button className="buy-button" onClick={() => alert('Buy Now clicked')}><FaShoppingBag /> Buy Now</button>
          
          </div>

          {/* Reviews Section */}
          <div className="reviews-section">
            <h4>Reviews:</h4>
            {selectedProduct.reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              selectedProduct.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <p>{review.content}</p>
                  <div style={ratingStarsStyle}>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        color={index + 1 <= review.rating ? "#ffc107" : "#e4e5e9"}
                        size={20}
                      />
                    ))}
                    <span className="rating-number">({review.rating}/5)</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Add Review Section */}
          <div className="add-review-section">
            <h4>Add a Review:</h4>
            <div style={reviewStarsStyle}>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`rating-${selectedProduct.id}`}
                      value={ratingValue}
                      onClick={() => handleRatingChange(selectedProduct.id, ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <FaStar
                      color={ratingValue <= (ratings[selectedProduct.id] || 0) ? "#ffc107" : "#e4e5e9"}
                      size={30}
                      style={{ cursor: 'pointer' }}
                    />
                  </label>
                );
              })}
            </div>
            <textarea
              placeholder="Write your review here..."
              value={newReview}
              onChange={handleReviewChange}
              className="review-textarea"
              style={{ width: '100%', height: '120px', padding: '12px', border: '1px solid #dcdcdc', borderRadius: '8px', fontSize: '1em', marginBottom: '10px', resize: 'none' }}
            />
            <button className="submit-review-button" onClick={() => handleAddReview(selectedProduct.id)}>Submit Review</button>
          </div>
        </div>
      ) : (
        <div style={gridStyle}>
          {products.map((product) => (
            <div key={product.id} style={productCardStyle} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} style={productImageStyle} />
              <h4>{product.name}</h4>
              <p className="price" style={priceStyle}>₹{product.price} <span className="original-price" style={originalPriceStyle}>₹{product.originalPrice}</span> ({product.discount}% off)</p>
              <div style={ratingStarsStyle}>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index + 1 <= Math.round(calculateAverageRating(product.reviews)) ? "#ffc107" : "#e4e5e9"}
                    size={20}
                  />
                ))}
                <span className="rating-number">({calculateAverageRating(product.reviews)}/5)</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ElectronicsPage;
