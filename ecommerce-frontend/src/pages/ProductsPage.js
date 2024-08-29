import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// import { FaStar } from 'react-icons/fa';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [newReview, setNewReview] = useState('');
  const navigate = useNavigate();



  useEffect(() => {
    // Simulate fetching products from an API
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token)
        {
          navigate('/');
        }
        const url= 'http://localhost:5120/api/Product';
        // debugger;
        const response = await axios.get(url , {
        headers: {
        Authorization: `Bearer ${token}`
        }
        });
        
        //console.log(response.data.$values[0]);
        setProducts(response.data.$values);
        
        } 
        catch (error) {
        if(localStorage.getItem('token') && (error.response.status === 401))
        {
          alert("Your token expired or you are not authorized for this page");
          localStorage.removeItem('token');
          navigate('/');
        }
        console.error('Error fetching products', error);
        }
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
      const token = localStorage.getItem('token');
        if(!token)
        {
          navigate('/');
        }
      const response = await axios.post('http://localhost:5120/api/Review/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          body: {
          ProductId: productId,
          Rating: rating,
          Comment: review
          }
        }
    );
    alert('Review added successfully');
   }
   catch (error) {
    alert('Error adding review');
      }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      await axios.post(`http://localhost:5120/api/Wishlist/`);
      alert('Added to wishlist');
    } catch (error) {
      alert('Error adding to wishlist');
    }
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const [newRatings,setNewRatings] = useState();
  const handleRatingChange = (productId, ratingValue) => {
    setRatings({ ...ratings, [productId]: ratingValue });
    setNewRatings(ratingValue)
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px',
    width: '800px'
  };

  const [reviewsResponse, setRespReviews] = useState([]);

  const handleReviewAdd = (product) => {
    setRespReviews( product.reviews.$values);
    console.log(reviewsResponse);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.productId}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>

            {handleReviewAdd(product)}
            <div>
              <h4>Reviews:</h4>
              {reviewsResponse.$values.length === 0 ? (
                <p>No reviews yet</p>
              ) : (
                product.reviews.$values.map((review) => (
                  <div key={review.reviewId}>
                    <div style={headerStyle}>
                      <span>Rating : {review.rating} ★ </span>
                      <span>Reviewed on: {review.reviewDate}</span>
                      <span>{review.comment}</span>
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
                        // style={{ display: 'none' }}
                      />
                    </label>
                  );
                })}
                
              </div>
              <textarea
                placeholder="Add a review"
                value={newReview}
                onChange={handleReviewChange}
              />
              <button onClick={() => handleAddReview(product.id)}>Add Review</button>
              <button onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductsPage;