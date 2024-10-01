import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
      <input
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Define default props
Input.defaultProps = {
  type: 'text',
  label: '',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
};

// Define prop types
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
