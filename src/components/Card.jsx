import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content, image, footer }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
      {image && <img src={image} alt="Card" className="w-full h-40 object-cover" />}
      <div className="p-4">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {content && <p className="text-gray-700">{content}</p>}
      </div>
      {footer && <div className="p-4 bg-gray-50 text-right">{footer}</div>}
    </div>
  );
};

Card.defaultProps = {
  title: 'Card Title',
  content: 'This is some card content.',
  image: '',
  footer: '',
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  footer: PropTypes.node,
};

export default Card;
