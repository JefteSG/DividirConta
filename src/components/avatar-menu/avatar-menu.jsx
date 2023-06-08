import React, { useState, useEffect } from 'react';
import Avatar from '../avatar/avatar.jsx';
import { connect } from 'react-redux';
import AvatarSelector from '../avatar-selector/avatar-selector';
import './avatar-menu.css';
import PropTypes from 'prop-types';


const AvatarMenu = ({ avatars, selectedAvatar }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(null);

  const toggleAvatarSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const onPageClick = (ev) => {
    const targetClasses = ev.target.classList;
    if (
      targetClasses.contains('selctor-title') ||
      targetClasses.contains('avatar-list') ||
      targetClasses.contains('overlay') ||
      targetClasses.contains('avatar-selector') ||
      targetClasses.contains('avatar-selector-wrapper')
    ) {
      return;
    }
    setIsSelectorOpen(null);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', onPageClick, false);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousedown', onPageClick, false);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedAvatar.id !== avatars[0].id) {
      setIsSelectorOpen(false);
    }
  }, [selectedAvatar, avatars]);

  return (
    <div className="avatar-menu">
      <div className="selected-avatar">
        <div onClick={toggleAvatarSelector} className="main-avatar-wrapper">
          <Avatar avatar={selectedAvatar} />
        </div>
      </div>
      {isSelectorOpen !== null ? (
        <div className={`avatar-selector-wrapper ${isSelectorOpen === true ? 'bounceIn' : 'bounceOut'}`}>
          <AvatarSelector avatars={avatars} selectedAvatar={selectedAvatar} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedAvatar: state.selectedAvatar,
  };
}

AvatarMenu.propTypes = {
  avatars: PropTypes.array.isRequired,
  selectedAvatar: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AvatarMenu);
