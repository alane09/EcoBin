import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { generateTrashCans } from './old';
import './realtime.css'; // Import the CSS file for styles

const Realtime = () => {
  const [alerts, setAlerts] = useState([]);
  const [fillRateData, setFillRateData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const trashCans = generateTrashCans();
    calculateFillRateData(trashCans);
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  useEffect(() => {
    // Create chart after rendering the canvas
    const ctx = document.getElementById('fillRateChart');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Supérieur à 80%', 'Inférieur à 80%'],
          datasets: [{
            label: 'Fill Rate',
            data: [fillRateData.above80 || 0, fillRateData.below80 || 0],
            backgroundColor: [
              '#8b0000', // Red color for above 80%
              '#00008b'   // Blue color for below 80%
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to not maintain aspect ratio
          plugins: {
            title: {
              display: true,
              text: 'Graphique de pourcentage de remplissage', // Add the title here
              position: 'top', // Position the title above the chart
              align: 'center', // Align the title to the center
              font: {
                size: 16
              }
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed) {
                    label += context.parsed + '%';
                  }
                  return label;
                }
              }
            }
          }
        }
      });
    }

    // Clean up
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [fillRateData]); // Re-run this effect whenever fillRateData changes

  useEffect(() => {
    // Calculate the alerts when the component mounts
    calculateAlerts(fillRateData);
  }, []);

  const calculateAlerts = (fillRateData) => {
    const above80 = fillRateData.above80 || 0;
    const total = fillRateData.total || 0;
    const globalSituation = above80 > 0 ? 'Fermée' : 'Ouverte';
    const fillRate = above80 > 0 ? (above80 / total) * 100 : null;

    setAlerts([
      {
        id: 'global',
        situation: globalSituation,
        fillRate: fillRate
      }
    ]);
  };

  const calculateFillRateData = (trashCans) => {
    const total = trashCans.length;
    const above80 = trashCans.filter(trashCan => trashCan.fillRate > 80).length;
    const below80 = total - above80;
    setFillRateData({ total, above80, below80 });
  };

  return (
    <div className="realtime-container">
      <div className="alert-container">
        {alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.situation}`}>
            <span>Situation de la Poubelle : </span>
            <span>{alert.situation}</span>
            {alert.fillRate !== null && <span>{` (${alert.fillRate.toFixed(2)}%)`}</span>}
          </div>
        ))}
      </div>
      <div className="chart-container">
        <canvas id="fillRateChart" width="400" height="400"></canvas> {/* Set canvas size here */}
      </div>
    </div>
  );
};

export default Realtime;
