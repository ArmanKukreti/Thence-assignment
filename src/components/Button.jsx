import React from 'react';

const Button = ({ ahref='', className, text, img }) => {
  return (
    <>
      {ahref ? (
        <a href={ahref}>
          <button style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className={className}>
            {text}
            {img && img}
            
          </button>
        </a>
      ) : (
        <button style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className={className}>
          {text}
          {img && img}
        </button>
      )}
    </>
  );
};

export default Button;
