import React from 'react';

const Player = ({ money, currentCity }) => {
  return (
    <div>
      <h2>Player</h2>
      <p>Money: ${money}</p>
      <p>Current City: {currentCity.name}</p>
    </div>
  );
};

export default Player;
