import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Prediction from './components/Prediction';
import DataInfo from './components/DataInfo';
import Visualization from './components/Visualization';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-info" element={<DataInfo />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/visualization" element={<Visualization />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;