// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/public/global/Navbar';

import Home from './pages/public/Home';
import About from './pages/public/About';
import ChoralChallenge from './pages/public/ChoralChallenge';
import Events from './pages/public/Events';
import Gallery from './pages/public/Gallery';
import Contact from './pages/public/Contact';
import Register from './pages/public/Register';
import Footer from './components/public/global/Footer';
import ScrollToTop from './components/public/ScrollToTop';
// import SeeYourSchoolFeature from './components/gallery/SeeYourSchoolFeature';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      {/* <SeeYourSchoolFeature /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/choral-challenge" element={<ChoralChallenge />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
