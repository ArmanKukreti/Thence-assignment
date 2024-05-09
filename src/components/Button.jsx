import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ ahref='', className, text, img }) => {
  return (
    <>
      {ahref ? (
        <Link to={ahref}>
          <button style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className={className}>
            {text}
            {img && img}
            
          </button>
        </Link>
      ) : (
        <button style={{ display: 'flex', gap: '20px', alignItems: 'center'}} className={className}>
          {text}
          {img && img}
        </button>
      )}
    </>
  );
};

export default Button;
