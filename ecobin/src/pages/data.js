// generateData.js
const faker = require('faker');
const fs = require('fs');

// Function to generate random data
const generateData = (numEntries) => {
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    const fillRate = faker.datatype.number({ min: 0, max: 100
        }); // Random fill rate between 0 and 100
    const date = faker.date.recent(); // Random recent date
    const trashCanId = faker.datatype.uuid(); // Random UUID for trash can ID
    const situation = fillRate > 80 ? 'fermée' : 'ouverte'; // Determine situation based on fill rate
    data.push({ fillRate, date, trashCanId, situation
        });
    }
  return data;
};

// Generate data and write to JSON file
const generatedData = generateData(10); // Generate 10 entries
fs.writeFileSync('trashCansData.json', JSON.stringify(generatedData));
console.log('Data generated successfully.');
