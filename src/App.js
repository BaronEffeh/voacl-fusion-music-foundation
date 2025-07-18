// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import HeroSection from './components/home/HeroSection';

import Home from './pages/Home';
import About from './pages/About';
import ChoralChallenge from './pages/ChoralChallenge';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><Home /></>} />
        <Route path="/home" element={<><HeroSection /><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/choral-challenge" element={<ChoralChallenge />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
