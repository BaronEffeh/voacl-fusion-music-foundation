import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/public/Home';
import About from '../pages/public/About';
import ChoralChallenge from '../pages/public/ChoralChallenge';
import Events from '../pages/public/Events';
import Gallery from '../pages/public/Gallery';
import Contact from '../pages/public/Contact';
import Register from '../pages/public/Register';
import PublicLayout from "../layouts/PublicLayout";

export default function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/choral-challenge" element={<ChoralChallenge />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </PublicLayout>
  );
}
