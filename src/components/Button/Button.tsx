import React from 'react';
import theme from '../../theme';
import './Button.css';
import '../index.css';

type ButtonProps = {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  color?: keyof typeof theme.colors;
  rounded?: boolean;
};

const Button = ({
  rounded = false,
  color = 'white',
  label,
  size = 'md',
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: theme.colors[color],
        color: 'white' ? theme.colors.black : theme.colors.white,
        borderRadius: rounded ? '9999px' : '0.5rem',
      }}
      type="button"
      className={[`button--${size}`].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
