
import React, { useState } from 'react';
import './old.css';

const TrashCanTable = () => {
  const [trashCans, setTrashCans] = useState(generateTrashCans());

  return (
    <div className="page-container">
      <h1 className="page-title">Données en temps réel</h1>
      <table className="trash-table">
        <thead className="table-header">
          <tr>
            <th>Taux de remplissage (%)</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trashCans.map(trashCan => (
            <tr key={trashCan.id}>
              <td className="fill-rate">{trashCan.fillRate}</td>
              <td className={trashCan.fillRate > 80 ? 'closed' : 'open'}>
                {trashCan.fillRate > 80 ? 'Fermée' : 'Ouverte'}
              </td>
              <td>{trashCan.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const generateTrashCans = () => {
  return Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    fillRate: Math.floor(Math.random() * 100) + 1,
    date: '2024-05-12',
  }));
};

export default TrashCanTable;
export { generateTrashCans };