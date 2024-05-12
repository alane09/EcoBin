// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v9, use the modular syntax
const firebaseConfig = {
  apiKey: "AIzaSyCx0O1EXFuxq3wylxhi_MjBE9IyF24yIpI",
  authDomain: "ecobin-55779.firebaseapp.com",
  databaseURL: "https://ecobin-55779-default-rtdb.firebaseio.com",
  projectId: "ecobin-55779",
  storageBucket: "ecobin-55779.appspot.com",
  messagingSenderId: "289909759012",
  appId: "1:289909759012:web:5d93698b478b04b2d30cb1",
  measurementId: "G-PH9H06B2GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export { app, database, analytics }; // exporting initialized app, database and analytics
export default firebaseConfig;