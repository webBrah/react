import React, { useState } from 'react';
import laws from './laws.json';
import './LawsOfPowerComponent.css'; // Import the CSS file

const LawsOfPowerComponent = () => {
  const [currentLawIndex, setCurrentLawIndex] = useState(0);

  const changeLaw = (increment) => {
    setCurrentLawIndex((prevIndex) => {
      const newIndex = prevIndex + increment;
      const totalLaws = laws.laws.length;
      if (newIndex < 0) {
        return totalLaws - 1;
      } else if (newIndex >= totalLaws) {
        return 0;
      }
      return newIndex;
    });
  };

  const displayRandomLaw = () => {
    const randomIndex = Math.floor(Math.random() * laws.laws.length);
    setCurrentLawIndex(randomIndex);
  };

  const currentLaw = laws.laws[currentLawIndex];

  return (
    <div className="laws-container">
      <h1>The 48 Laws of Power</h1>
      <div className="law-card">
        <h3 className="law-title">
          Law {currentLawIndex + 1}: {currentLaw.law}
        </h3>
        <p className="law-summary">{currentLaw.summary}</p>
      </div>
      <div className="button-container">
        <button className="prev-law-button" onClick={() => changeLaw(-1)}>
          Previous Law
        </button>
        <button className="random-law-button" onClick={displayRandomLaw}>
          Random Law
        </button>
        <button className="next-law-button" onClick={() => changeLaw(1)}>
          Next Law
        </button>
      </div>
    </div>
  );
};

export default LawsOfPowerComponent;
