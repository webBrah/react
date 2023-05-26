import React, { useState } from 'react';
import laws from './laws.json';
import './LawsOfPowerComponent.css'; // Import the CSS file

const LawsOfPowerComponent = () => {
  const [currentLawIndex, setCurrentLawIndex] = useState(0);

  const changeLaw = () => {
    setCurrentLawIndex((prevIndex) => (prevIndex + 1) % laws.laws.length);
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
      <button className="next-law-button" onClick={changeLaw}>
        Next Law
      </button>
    </div>
  );
};

export default LawsOfPowerComponent;
