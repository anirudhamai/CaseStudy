import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  // Sample wishlist data
  const sampleWishlist = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
      rating: 5
    }
  ];

  useEffect(() => {
    // Simulate fetching wishlist data from an API
    const fetchWishlist = async () => {
      setWishlist(sampleWishlist);
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      // Simulate removing a product from the wishlist
      setWishlist(wishlist.filter(product => product.id !== productId));
      alert('Removed from wishlist');
    } catch (error) {
      alert('Error removing from wishlist');
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map((product) => (
          <div key={product.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index + 1 <= product.rating ? "#ffc107" : "#e4e5e9"}
                  size={20}
                />
              ))}
            </div>
            <button onClick={() => handleRemoveFromWishlist(product.id)}>Remove from Wishlist</button>
            <button onClick={() => navigate(`/products/${product.id}`)}>View Details</button>
          </div>
        ))
      )}
    </div>
  );
}

export default WishlistPage;
