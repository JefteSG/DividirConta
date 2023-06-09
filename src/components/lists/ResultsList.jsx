import React from 'react';

const ResultsList = ({ people, foods, canBeShared }) => {
  const calculateTotalValue = (person) => {
    let totalValue = 0;
    person.foods.forEach((foodName) => {
      const food = foods.find((f) => f.name === foodName);
      if (food) {
        let valueToAdd = food.value;
        if (canBeShared === true && food.value % 1 === 0) {
          const numberOfPeopleWithFood = people.filter((person) => person.foods.includes(foodName)).length;
          valueToAdd = food.value / numberOfPeopleWithFood;
        }
        totalValue += valueToAdd;
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
