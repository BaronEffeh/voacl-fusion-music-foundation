// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from './components/public/ScrollToTop';

import PublicRoutes from './routes/PublicRoutes';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
