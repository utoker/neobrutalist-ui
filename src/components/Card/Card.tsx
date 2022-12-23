import React from 'react';
import theme from '../../theme';
import './Card.css';
import '../index.css';

// todo: clickable, text center,

type CardProps = {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
  color?: keyof typeof theme.colors;
};

const Card = ({ title, description, image, color = 'white' }: CardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: theme.colors[color],
      }}
    >
      <div className="body">
        {image && <img src={image} alt={title} />}
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
