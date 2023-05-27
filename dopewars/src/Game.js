import React, { useState, useEffect } from 'react';
import Player from './Player';
import Market from './Market';
import Inventory from './Inventory';
import './Game.css';

const cities = [
  {
    name: 'City A',
    drugs: [
      { name: 'Marijuana', price: 20, isAvailable: true },
      { name: 'Cocaine', price: 100, isAvailable: true },
      { name: 'Heroin', price: 200, isAvailable: true },
      // Add more drugs for City A
      // ...
    ],
  },
  {
    name: 'City B',
    drugs: [
      { name: 'Marijuana', price: 30, isAvailable: true },
      { name: 'Cocaine', price: 150, isAvailable: true },
      { name: 'Heroin', price: 250, isAvailable: true },
      // Add more drugs for City B
      // ...
    ],
  },
  {
    name: 'City C',
    drugs: [
      { name: 'Marijuana', price: 40, isAvailable: true },
      { name: 'Cocaine', price: 200, isAvailable: true },
      { name: 'Heroin', price: 300, isAvailable: true },
      // Add more drugs for City C
      // ...
    ],
  },
  // Add more cities if desired
];

const MAX_SPACE = 10; // Maximum space for drugs

const Game = () => {
  const [money, setMoney] = useState(1000);
  const [debt, setDebt] = useState(500);
  const [inventory, setInventory] = useState([]);
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState([]);
  const [space, setSpace] = useState(MAX_SPACE);

  useEffect(() => {
    const updatePrices = () => {
      const updatedCity = { ...currentCity };
      updatedCity.drugs = updatedCity.drugs.map((drug) => {
        if (drug.isAvailable) {
          const priceChange = Math.floor(drug.price * (Math.random() * (1.2 - 0.8) + 0.8));
          return { ...drug, price: priceChange };
        }
        return drug;
      });
      setCurrentCity(updatedCity);
    };

    if (turn > 1) {
      updatePrices();
    }
  }, [turn]);

  const buyDrug = (drug, amount) => {
    if (drug.isAvailable) {
      const totalPrice = drug.price * amount;
      if (money >= totalPrice && inventory.length + amount <= space) {
        setMoney(money - totalPrice);

        const existingDrug = inventory.find((item) => item.name === drug.name);
        if (existingDrug) {
          const updatedInventory = inventory.map((item) =>
            item.name === drug.name ? { ...item, amount: item.amount + amount } : item
          );
          setInventory(updatedInventory);
        } else {
          const newDrug = { ...drug, amount };
          setInventory((prevInventory) => [...prevInventory, newDrug]);
        }

        addToLog(`Turn ${turn} - Player purchased ${amount} units of ${drug.name}`);
      }
    }
  };

  const sellDrug = (drug, amount) => {
    if (drug.isAvailable) {
      const marketDrug = currentCity.drugs.find((marketDrug) => marketDrug.name === drug.name);

      if (marketDrug) {
        const totalPrice = marketDrug.price * amount;
        setMoney(money + totalPrice);

        const existingDrug = inventory.find((item) => item.name === drug.name);

        if (existingDrug && existingDrug.amount >= amount) {
          if (existingDrug.amount === amount) {
            const updatedInventory = inventory.filter((item) => item.name !== drug.name);
            setInventory(updatedInventory);
          } else {
            const updatedInventory = inventory.map((item) =>
              item.name === drug.name ? { ...item, amount: item.amount - amount } : item
            );
            setInventory(updatedInventory);
          }

          addToLog(`Turn ${turn} - Player sold ${amount} units of ${drug.name}`);
        }
      }
    }
  };

  const depositMoney = (amount) => {
    if (money >= amount) {
      setMoney(money - amount);
      addToLog(`Turn ${turn} - Player deposited $${amount}`);
    }
  };

  const withdrawMoney = (amount) => {
    setMoney(money + amount);
    addToLog(`Turn ${turn} - Player withdrew $${amount}`);
  };

  const takeLoan = (amount) => {
    setDebt(debt + amount);
    setMoney(money + amount);
    addToLog(`Turn ${turn} - Player took a loan of $${amount}`);
  };

  const repayLoan = (amount) => {
    if (money >= amount) {
      setDebt(debt - amount);
      setMoney(money - amount);
      addToLog(`Turn ${turn} - Player repaid $${amount} of the loan`);
    }
  };

  const buySpace = (amount) => {
    const totalCost = amount * 100;
    if (money >= totalCost) {
      setMoney(money - totalCost);
      setSpace((prevSpace) => prevSpace + amount);
      addToLog(`Turn ${turn} - Player bought ${amount} additional space`);
    }
  };

  const changeCity = (city) => {
    setCurrentCity(city);
    addToLog(`Turn ${turn} - Player moved to ${city.name}`);
  };

  const addToLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  const nextTurn = () => {
    if (turn < 30) {
      setTurn(turn + 1);
      addToLog(`Turn ${turn + 1} - Next turn`);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Dopewars</h1>
      <div className="game-content">
        <div className="game-info">
          <Player money={money} currentCity={currentCity} debt={debt} />
          <div className="game-actions">
            <h2 className="section-title">Bank</h2>
            <div className="bank-buttons">
              <button onClick={() => depositMoney(100)}>Deposit $100</button>
              <button onClick={() => withdrawMoney(100)}>Withdraw $100</button>
            </div>
            <h2 className="section-title">Loan Shark</h2>
            <div className="loan-buttons">
              <button onClick={() => takeLoan(500)}>Take Loan $500</button>
              <button onClick={() => repayLoan(500)}>Repay Loan $500</button>
            </div>
            <h2 className="section-title">Inventory Space</h2>
            <div className="space-buttons">
              <button onClick={() => buySpace(1)}>Buy 1 Space</button>
              <button onClick={() => buySpace(5)}>Buy 5 Spaces</button>
            </div>
          </div>
        </div>
        <div className="game-market">
          <Market drugs={currentCity.drugs} buyDrug={buyDrug} />
        </div>
        <div className="game-inventory">
          <Inventory inventory={inventory} sellDrug={sellDrug} />
        </div>
      </div>
      <div className="game-turn">
        <h3>Turn: {turn}</h3>
        <button className="next-turn-button" onClick={nextTurn} disabled={turn === 30}>
          Next Turn
        </button>
      </div>
      <div className="game-travel">
        <h2 className="section-title">Travel to:</h2>
        <div className="city-buttons">
          {cities.map((city, index) => (
            <button
              key={index}
              onClick={() => changeCity(city)}
              className={city === currentCity ? 'active' : ''}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>
      <div className="game-log">
        <h2 className="section-title">Game Log</h2>
        <ul>
          {log.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
