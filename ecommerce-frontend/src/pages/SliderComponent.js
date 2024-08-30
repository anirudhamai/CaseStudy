import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './SliderComponent.css'; // Ensure styles are correctly applied

const categories = [
  { name: 'Groceries', imgSrc: 'https://i.pinimg.com/736x/4f/37/9e/4f379e5ca791838e4735e0458b66df40.jpg', path: '/category/groceries' },
  { name: 'Electronics', imgSrc: 'https://via.placeholder.com/1200x675?text=Electronics', path: '/category/electronics' },
  { name: 'Fashion', imgSrc: 'https://via.placeholder.com/1200x675?text=Fashion', path: '/category/fashion' },
  { name: 'Entertainment', imgSrc: 'https://via.placeholder.com/1200x675?text=Entertainment', path: '/category/entertainment' }
];

function SliderComponent() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="slider-item"
            onClick={() => navigate(category.path)}
          >
            <img src={category.imgSrc} alt={category.name} />
            <div className="slider-overlay">
              <h3>{category.name}</h3>
              <a href={category.path} className="slider-button">Shop Now</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
