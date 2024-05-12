// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// firebaseConfig.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = firebaseConfig.database();

export default firebaseConfig ;
