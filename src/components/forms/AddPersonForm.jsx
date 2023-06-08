import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AvatarMenu from '../../components/avatar-menu/avatar-menu.jsx';
import colonyStore from '../../store/colonyStore.js';
import avatars from '../../constants/constants.js';

const AddPersonForm = ({ addPerson }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addPerson(name);
      setName('');
      setSelectedAvatar([])
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <label htmlFor="avatar">Avatar:
        <Provider store={colonyStore}>
          <AvatarMenu avatars={avatars} setSelectedAvatar={selectedAvatar} />
        </Provider>
      </label>
      <button type="submit">Adicionar Pessoa</button>
    </form>
  );
};

export default AddPersonForm;
