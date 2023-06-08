import React from 'react';

const ResultsList = ({ people, foods }) => {
  const calculateTotalValue = (person) => {
    let totalValue = 0;
    person.foods.forEach((foodName) => {
      const food = foods.find((f) => f.name === foodName);
      if (food) {
        totalValue += food.value;
      }
    });
  
    return totalValue.toFixed(2);
  };
  
 

  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          <span>{person.name}: R${calculateTotalValue(person)}</span>
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
