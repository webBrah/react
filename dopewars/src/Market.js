import React from 'react';

const Market = ({ drugs, buyDrug }) => {
  return (
    <div>
      <h2>Market</h2>
      <ul>
        {drugs.map((drug, index) => (
          <li key={index}>
            {drug.name} - ${drug.price}
            <button onClick={() => buyDrug(drug, 1)}>Buy 1</button>
            <button onClick={() => buyDrug(drug, 5)}>Buy 5</button>
            <button onClick={() => buyDrug(drug, 10)}>Buy 10</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
