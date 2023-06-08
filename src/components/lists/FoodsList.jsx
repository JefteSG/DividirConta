import React from 'react';

const FoodsList = ({ foods }) => {
  return (
    <ul>
      {foods.map((food, index) => (
        <li key={index}>
          <span>{food.name} - Valor: R${food.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default FoodsList;
