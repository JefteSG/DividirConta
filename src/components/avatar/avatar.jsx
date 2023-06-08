import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <img
        src={process.env.PUBLIC_URL + '/avatars/' + avatar.src}
        alt={avatar.label}
      />
      <div className="overlay"></div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
