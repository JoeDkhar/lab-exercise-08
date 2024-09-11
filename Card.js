import React, { useState } from 'react';
import './Card.css';
import heart from '../svg/heart.svg'; // Adjust the path based on your directory structure

const Card = ({ title, features, image }) => {
  const [liked, setLiked] = useState(false);
  const [clicks, setClicks] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setClicks(liked ? clicks - 1 : clicks + 1);
  };

  return (
    <div className="card m-4" style={{ width: '18rem' }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{features}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <button
          onClick={toggleLike}
          className={`card-footer-item button ${liked ? 'is-danger' : 'is-light'} is-large`}
          style={{ fontSize: liked ? '2rem' : '1.5rem' }}
        >
          <img
            src={heart}
            alt="heart"
            style={{ width: liked ? '36px' : '24px', transition: 'width 0.3s ease' }}
          />
        </button>
      </footer>
    </div>
  );
};

export default Card;