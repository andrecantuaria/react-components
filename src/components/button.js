import React from 'react';
function Button({ type, text }) {
  const buttonClass = type === 'primary' ? 'button primary' : 'button secondary';

  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
}

export default Button;
