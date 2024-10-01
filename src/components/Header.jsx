import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-800 p-6 text-center text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-lg text-gray-300 mt-2">{subtitle}</p>}
    </header>
  );
};

Header.defaultProps = {
  title: 'My Application',
  subtitle: '',
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
