import React from 'react';

const PeopleList = ({ people }) => {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          <img src={process.env.PUBLIC_URL + '/avatars/' + person.avatar} alt={person.avatar} />

          <span>{person.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
