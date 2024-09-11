import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';
import tennisCourtImage from './tennis.jpg';
import footballFieldImage from './football.jpg';
import basketball from './basketball.jpg';
import swimmingPool from './pool.jpg';
import hockey from './hockey.jpg';
import cricket from './cricket.jpg';

const App = () => {
  const [cards, setCards] = useState([
    {
      title: 'Tennis Court',
      features: ['Clay Surface', 'Night Lighting', 'Seating for 50'],
      image: tennisCourtImage,
    },
    {
      title: 'Football Field',
      features: ['Artificial Turf', 'Scoreboard', 'Seating for 200'],
      image: footballFieldImage,
    },
    {
      title: 'Basketball Court',
      features: ['Hardwood Floor', 'Scoreboard', 'Seating for 100'],
      image: basketball,
    },
    {
      title: 'Swimming Pool',
      features: ['Olympic Size', 'Diving Boards', 'Lifeguards'],
      image: swimmingPool,
    },
    {
      title: 'Hockey Rink',
      features: ['Ice Surface', 'Boards', 'Seating for 1000'],
      image: hockey,
    },
    {
      title: 'Cricket Ground',
      features: ['Grass Surface', 'Scoreboard', 'Seating for 5000'],
      image: cricket,
    },
    
  ]);

  return (
    <div className="container">
      <div className="columns is-multiline">
        {cards.map((card, index) => (
          <div className="column is-one-third" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;