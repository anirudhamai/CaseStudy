import React, { useState, useEffect, useContext } from 'react';
import { FaStar, FaCartPlus, FaShoppingBag, FaHeart } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
// import { ReactSession }  from 'react-client-session';



function ElectronicsPage() {
  //const { cartItems, addToCart } = useContext(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [userid, setUserid] = useState();
  const [newReview, setNewReview] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const { categoryName } = location.state;
      setCategory(categoryName);
      const { userId } = location.state;
      setUserid(userId);
      try {
        const token = localStorage.getItem('token');
        if(!token)
        {
          navigate('/');
        }

        const url2= `http://localhost:5120/api/Product/getBycat/${location.state.categoryId}`;
        const response = await axios.get(url2 , {
        headers: {
        Authorization: `Bearer ${token}`
        }
        });
        // console.log(response.data.$values);
        setProducts(response.data.$values);
        } 
        catch (error) {
          console.log(error);
          if(error.code == "ERR_NETWORK"){
            alert(error.message);
            localStorage.removeItem('token');
            navigate('/login');
          }
        if(localStorage.getItem('token') && (error.response.status === 401))
        {
          alert("Your token expired or you are not authorized for this page");
          localStorage.removeItem('token');
          navigate('/login');
        }
        console.error('Error fetching products', error);
      }
    };
    fetchCategoryProducts();
  }, []);

  useEffect(() => {
    // console.log("useeffect", products)
  }, [products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  const addReview = async (product, review, rating) => {
    try {
        const token = localStorage.getItem('token');

        const url2= `http://localhost:5120/api/Review`;
        const reviewData={
          UserId: userid,
          ProductId: product,
          Rating: rating,
          Comment: review
        }
        const response = await axios.post(url2 ,reviewData ,{
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
        }
        });
        
        // setProducts(response.data.$values);
        } 
        catch (error) {
          console.log(error);
          if(error.code == "ERR_NETWORK"){
            alert(error.message);
            localStorage.removeItem('token');
            navigate('/login');
          }
        if(localStorage.getItem('token') && (error.response.status === 401))
        {
          alert("Your token expired or you are not authorized for this page");
          localStorage.removeItem('token');
          navigate('/login');
        }
        console.error('Error fetching products', error);
      }
    }

  const handleAddReview = (productId) => {
    const review = newReview.trim();
    const rating = ratings[productId] || 0;

    if (!review || rating === 0) {
      alert('Please provide both a review and a rating.');
      return;
    }

    addReview(productId, review, rating);

    alert('Review added successfully!');
    setNewReview('');
    setRatings({ ...ratings, [productId]: 0 });
  };


  const addToCart = async (product) => {
    try {

      const token = localStorage.getItem('token');
      const url2= `http://localhost:5120/api/Cart`;
        const cart={
          UserId: userid
        }
        const response = await axios.post(url2 ,cart ,{
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
        }
        });
        const url1= `http://localhost:5120/api/CartItem`;
        const cartItem={
          CartId: response.data,
          ProductId: product.productId,
          Quantity: 1
        }

        const response2 = await axios.post(url1 ,cartItem ,{
          headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
          }
          });
        //console.log(response.data);
        return response.data;
        } 
        catch (error) {
          console.log(error);
          if(error.code == "ERR_NETWORK"){
            alert(error.message);
            localStorage.removeItem('token');
            navigate('/login');
          }
        if(error.response.status === 401)
        {
          alert("Your token expired or you are not authorized for this page");
          localStorage.removeItem('token');
          navigate('/login');
        }
        console.error('Error fetching products', error);
      }
    }

  const handleAddToCart = (product) => {
    var resp = addToCart(product);
    alert('Added to cart!');
    //ReactSession.set("cart", resp);
    navigate('/cart', { state: { userId: userid, cartId: resp } });
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (productId, ratingValue) => {
    setRatings({ ...ratings, [productId]: ratingValue });
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.$values.length === 0) return 0;
    const total = reviews.$values.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.$values.length).toFixed(1);
    // return 0;
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
      <h2 className="page-title">{category}</h2>
      {selectedProduct ? (
        <div className="product-details">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>← Back to Products</button>
          <h3>{selectedProduct.name}</h3>
          {/* <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ ...productImageStyle, ...(selectedProduct ? productImageEnlargedStyle : {}) }}
          /> */}
          <p>{selectedProduct.description}</p>
          <p className="price" style={priceStyle}>₹{selectedProduct.price} ({selectedProduct.discounts.$values.map((discount) => (<span>{discount.discountPercentage}</span>))}% off)</p>
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
            {selectedProduct.reviews.$values.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              selectedProduct.reviews.$values.map((review) => (
                <div key={review.$id} className="review-item">
                  <p>{review.comment}</p>
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
                      name={`rating-${selectedProduct.productId}`}
                      value={ratingValue}
                      onClick={() => handleRatingChange(selectedProduct.productId, ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <FaStar
                      color={ratingValue <= (ratings[selectedProduct.productId] || 0) ? "#ffc107" : "#e4e5e9"}
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
            <button className="submit-review-button" onClick={() => handleAddReview(selectedProduct.productId)}>Submit Review</button>
          </div>
        </div>
      ) : (
        <div style={gridStyle}>
          {products.map((product) => (
            <div key={product.$id} style={productCardStyle} onClick={() => handleProductClick(product)}>
              {/* <img src={product.image} alt={product.name} style={productImageStyle} /> */}
              <h4>{product.name}</h4>
              <p className="price" style={priceStyle}>₹{product.price}  ({product.discounts.$values.map((discount) => (<span>{discount.discountPercentage}</span>))}% off) </p>
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
