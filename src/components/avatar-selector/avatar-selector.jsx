import React, { useState } from 'react';
import PropTypes from 'prop-types';
import colonyStore from '../../store/colonyStore.js';
import { selectAvatar } from '../../actions/avatarActions.js';
import Avatar from '../avatar/avatar';
import './avatar-selector.css';

const AvatarSelector = ({ avatars, selectedAvatar }) => {
  const [loadingId, setLoadingId] = useState(-1);

  const selectAvatarHandler = (avatar) => {
    setLoadingId(avatar.id);
    setTimeout(() => {
      colonyStore.dispatch(selectAvatar(avatar));
      setLoadingId(-1);
    }, 1000);
  };

  return (
    <div className="avatar-selector">
      <div className="selctor-title"> Escolha um Avatar</div>
      <ul className="avatar-list">
        {avatars.map((avatar, key) => (
          <li
            className={`avatar-option ${selectedAvatar.id === avatar.id ? 'selected' : ''}`}
            onClick={() => selectAvatarHandler(avatar)}
            key={key}
          >
            <Avatar avatar={avatar} />
            <div className={`loader ${loadingId === avatar.id ? '' : 'hidden'}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

AvatarSelector.propTypes = {
  avatars: PropTypes.array.isRequired,
  selectedAvatar: PropTypes.object.isRequired,
};

export default AvatarSelector;
