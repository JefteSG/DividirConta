import React, { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
  const [foodName, setFoodName] = useState('');
  const [foodValue, setFoodValue] = useState('');
  const [canBeShared, setCanBeShared] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName && foodValue) {
      const parsedValue = parseFloat(foodValue);
      const value = canBeShared ? parsedValue : Math.round(parsedValue);
      addFood(foodName, value);
      setFoodName('');
      setFoodValue('');
      setCanBeShared(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setCanBeShared(e.target.checked);
    console.log(canBeShared)
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
      
      <div>
        <label htmlFor="canBeShared">Comida pode ser dividida?</label>
        <select id="canBeShared" value={canBeShared} onChange={(e) => setCanBeShared(e.target.value === 'true')}>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      
      <button type="submit">Adicionar Comida</button>
    </form>
  );
};
export default AddFoodForm;
