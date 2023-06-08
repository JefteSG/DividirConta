import React, { useState } from 'react';
import './styles.css'

import PeopleList from '../../components/lists/PeopleList';
import AddPersonForm from '../../components/forms/AddPersonForm';
import FoodsList from '../../components/lists/FoodsList';
import AddFoodForm from '../../components/forms/AddFoodForm';
import AssignFoodForm from '../../components/forms/AssingFoodForm';
import ResultsList from '../../components/lists/ResultsList';

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedAvatar] = useState (null);

  const addPerson = (name) => {
    const newPerson = {
      name: name,
      avatar: selectedAvatar,
      foods: [],
    };
    setPeople([...people, newPerson]);
    setSelectedPerson('');
  };

  const addFood = (name, value) => {
    const newFood = {
      name: name,
      value: value,
      people: [],
    };
    setFoods([...foods, newFood]);
  };

  const assignFoodToPerson = () => {
    const personIndex = people.findIndex((person) => person.name === selectedPerson);
    const foodIndex = foods.findIndex((food) => food.name === selectedFood);

    if (personIndex !== -1 && foodIndex !== -1) {
      const updatedPeople = [...people];
      updatedPeople[personIndex].foods.push(selectedFood);

      const updatedFoods = [...foods];
      updatedFoods[foodIndex].people.push(selectedPerson);

      setPeople(updatedPeople);
      setFoods(updatedFoods);
      setSelectedPerson('');
      setSelectedFood('');
    }
  };

  return (
    <div>
      <h1>Desafio 3</h1>
      <h2>Pessoas</h2>
      <PeopleList people={people} />
      <AddPersonForm addPerson={addPerson} selectedAvatar={selectedAvatar} />


      <h2>Comidas</h2>
      <FoodsList foods={foods} />
      <AddFoodForm addFood={addFood} />

      <h2>Atribuir Comida a Pessoa</h2>
      <AssignFoodForm
        people={people}
        foods={foods}
        assignFoodToPerson={assignFoodToPerson}
        selectedPerson={selectedPerson}
        selectedFood={selectedFood}
        setSelectedPerson={setSelectedPerson}
        setSelectedFood={setSelectedFood}
      />

      <h2>Resultados</h2>
      <ResultsList people={people} foods={foods} />
    </div>
  );
};
