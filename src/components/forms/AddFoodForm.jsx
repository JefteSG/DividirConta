import React, { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
  const [foodName, setFoodName] = useState('');
  const [foodValue, setFoodValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName && foodValue) {
      addFood(foodName, parseFloat(foodValue));
      setFoodName('');
      setFoodValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="foodName">Nome da Comida:</label>
      <input type="text" id="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
      <label htmlFor="foodValue">Valor da Comida:</label>
      <input
        type="number"
        id="foodValue"
        value={foodValue}
        onChange={(e) => setFoodValue(e.target.value)}
        step="0.01"
        required
      />
      <button type="submit">Adicionar Comida</button>
    </form>
  );
};

export default AddFoodForm;
