import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/assets/components/Header/header';
import Footer from '../src/assets/components/Footer/footer';
import Home from '../src/assets/views/Home/Home';
import Program from '../src/assets/components/features/program/program'; 
import Peliculas from '../src/assets/views/Peliculas/Peliculas'; 
import Series from '../src/assets/views/Series/Series'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Series />} /> {}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer className="App-footer" />
      </div>
    </Router>
  );
}

export default App;