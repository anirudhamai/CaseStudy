import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [newReview, setNewReview] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Sample products array
  const sampleProducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { id: 1, content: 'Great product!', rating: 5 },
        { id: 2, content: 'Satisfactory', rating: 3 }
      ]
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { id: 1, content: 'Loved it!', rating: 4 }
      ]
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { id: 1, content: 'Not worth the price.', rating: 2 }
      ]
    },
  ];

  useEffect(() => {
    // Simulate fetching products from an API
    const fetchProducts = async () => {
      setProducts(sampleProducts);
    };
    fetchProducts();
  }, []);

  const handleAddReview = async (productId) => {
    const review = newReview;
    const rating = ratings[productId] || 0;

    if (!review || rating === 0) {
      alert('Please provide both a review and a rating');
      return;
    }

    try {
      // Update the sample data to simulate adding a review
      setProducts(products.map(product =>
        product.id === productId
          ? { ...product, reviews: [...product.reviews, { id: product.reviews.length + 1, content: review, rating }] }
          : product
      ));
      alert('Review added successfully');
      setNewReview(''); // Clear review after submission
      setRatings({ ...ratings, [productId]: 0 });  // Reset rating after submission
    } catch (error) {
      alert('Error adding review');
    }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      navigate('/wishlist'); 
      await axios.post(`/api/products/${productId}/wishlist`);
      alert('Added to wishlist');
      navigate('/wishlist');  
    } catch (error) {
      alert('Error adding to wishlist');
    }
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (productId, ratingValue) => {
    setRatings({ ...ratings, [productId]: ratingValue });
  };

  const handleAddToCart = async (productId) => {
    try {
      navigate('/cart');// just for sake of understanding, I have added
      // Assuming you have an API to handle cart operations
      await axios.post(`/api/products/${productId}/cart`);
      navigate('/cart'); // Redirect to the Cart page
      alert('Added to cart');
    } catch (error) {
      alert('Error adding to cart');
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <img src={product.image} alt={product.name} />

            {/* Display existing reviews */}
            <div>
              <h4>Reviews:</h4>
              {product.reviews.length === 0 ? (
                <p>No reviews yet</p>
              ) : (
                product.reviews.map((review) => (
                  <div key={review.id}>
                    <p>{review.content}</p>
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color={index + 1 <= review.rating ? "#ffc107" : "#e4e5e9"}
                          size={20}
                        />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Add new review */}
            <div>
              <h4>Add a Review:</h4>
              <div>
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`rating-${product.id}`}
                        value={ratingValue}
                        onClick={() => handleRatingChange(product.id, ratingValue)}
                        style={{ display: 'none' }}
                      />
                      {<FaStar
                      
                        color={ratingValue <= (ratings[product.id] || 0) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        style={{ cursor: 'pointer' }}
                      /> }


{/* <FaStar
  color={ratingValue <= (ratings[product.id] || 0) ? "#ffc107" : "#e4e5e9"}
  size={30}
  style={{ cursor: 'pointer', display: 'inline-block' }}
/> */}


                    </label>
                  );
                })}
              </div>
              <textarea
                placeholder="Add a review"
                value={newReview}
                onChange={handleReviewChange}
              />
              <div>
                <button onClick={() => handleAddReview(product.id)}>Add Review</button>
                <button onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button> {/* Add to Cart button */}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductsPage;
