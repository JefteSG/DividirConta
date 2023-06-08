import React from 'react';

const AssignFoodForm = ({
  people,
  foods,
  assignFoodToPerson,
  selectedPerson,
  selectedFood,
  setSelectedPerson,
  setSelectedFood,
}) => {
  return (
    <form>
      <label htmlFor="selectPerson">Pessoa:</label>
      <select
        id="selectPerson"
        value={selectedPerson}
        onChange={(e) => setSelectedPerson(e.target.value)}
      >
        <option value="">Selecione uma pessoa</option>
        {people.map((person, index) => (
          <option key={index} value={person.name}>
            {person.name}
          </option>
        ))}
      </select>
      <label htmlFor="selectFood">Comida:</label>
      <select id="selectFood" value={selectedFood} onChange={(e) => setSelectedFood(e.target.value)}>
        <option value="">Selecione uma comida</option>
        {foods.map((food, index) => (
          <option key={index} value={food.name}>
            {food.name} - Valor: R${food.value}
          </option>
        ))}
      </select>
      <button type="button" onClick={assignFoodToPerson}>
        Atribuir Comida
      </button>
    </form>
  );
};

export default AssignFoodForm;
