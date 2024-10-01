import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, backgroundColor, size, onClick }) => {
  // Define size-based classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  // Define background color classes
  const colorClasses = {
    blue: 'bg-blue-500',
    gray: 'bg-gray-500',
    green: 'bg-green-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
    // Add more colors as needed
  };

  return (
    <button
      className={`text-white font-semibold rounded ${sizeClasses[size]} ${colorClasses[backgroundColor]} hover:opacity-80 transition-opacity duration-300 cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Define default props
Button.defaultProps = {
  backgroundColor: 'blue',
  size: 'medium',
  label: 'Button',
  onClick: () => {},
};

// Define prop types
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['blue', 'gray', 'green', 'pink', 'red']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

export default Button;
