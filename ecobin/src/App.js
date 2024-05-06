import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import OldData from './pages/old'; 
import FuturPrediction from './pages/futur';
import RealTimeData from './pages/realtime'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add this line to import the App.css file

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/realtimedata' element={<RealTimeData />} />
        <Route path='/olddata' element={<OldData/>} />
        <Route path='/futurpred' element={<FuturPrediction />} /> 
      </Routes>
    </div>
  );
}

export default App;
