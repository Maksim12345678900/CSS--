import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ title, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={styles.card} 
      style={{ backgroundColor: isFlipped ? '#000' : '#fff', color: isFlipped ? '#fff' : '#000' }}
    >
      <h2 className={styles.title}>{title}</h2>
      <img src={image} alt="card image" className={styles.image} />
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={handleButtonClick}>
        Flip Colors
      </button>
    </div>
  );
};

export default Card;
