import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const TrashCanTable = () => {
  const [trashCans, setTrashCans] = useState([]);

  useEffect(() => {
    // Créer une référence à l'emplacement des données dans Realtime Database
    const trashCansRef = firebase.database().ref('trashCans');

    // Écouter les modifications de données en temps réel
    const fetchData = () => {
      trashCansRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convertir les données en un tableau d'objets
          const trashCansArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setTrashCans(trashCansArray);
        }
      });
    };

    fetchData();

    // Nettoyer le listener lorsque le composant est démonté
    return () => {
      trashCansRef.off('value');
    };
  }, []);

  return (
    <div>
      <h2>Liste des poubelles</h2>
      <table>
        <thead>
          <tr>
            <th>Localisation</th>
            <th>Taux de remplissage (%)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trashCans.map(trashCan => (
            <tr key={trashCan.id}>
              <td>{trashCan.location}</td>
              <td>{trashCan.fillRate}</td>
              <td>{trashCan.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrashCanTable;
