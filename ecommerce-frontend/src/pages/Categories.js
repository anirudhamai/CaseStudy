// src/pages/Categories.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Categories.css';

function Categories(userid) {

  const [CategoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem('token');
      if(!token)
      {
        navigate('/');
      }
      const url= 'http://localhost:5120/api/Category';
      const response = await axios.get(url , {
      headers: {
      Authorization: `Bearer ${token}`
      }
      });
      setCategoryData(response.data.$values || []);
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
  fetchCategory();
}, []);

useEffect(() => {
    setLoading(false);
  }, [CategoryData]);

  const navigate = useNavigate();
  

  return (
    <div className="categories-container">
    {loading ? (
      <p>Loading categories...</p>
    ) : (
      CategoryData.map((category) => (
        <div key={category.$id} className="category-item">
          <Link to={'/category/electronics'} state={ {userId: userid, categoryId: category.categoryId, categoryName: category.categoryName} }>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.categoryName}</h3>
          </Link>
        </div>
      ))
    )}
    </div>
  );
}

export default Categories;


