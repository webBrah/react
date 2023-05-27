import React from 'react';

const Inventory = ({ inventory, sellDrug }) => {
  const sellAllDrugs = () => {
    inventory.forEach((drug) => {
      const amount = drug.amount;
      sellDrug(drug, amount);
    });
  };

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((drug, index) => (
          <li key={index}>
            {drug.name} - ${drug.price} - Amount: {drug.amount}
            <button onClick={() => sellDrug(drug, 1)}>Sell 1</button>
            <button onClick={() => sellDrug(drug, drug.amount)}>Sell All</button>
          </li>
        ))}
      </ul>
      <button onClick={sellAllDrugs} disabled={inventory.length === 0}>
        Sell All Drugs
      </button>
    </div>
  );
};

export default Inventory;
