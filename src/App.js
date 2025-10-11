// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./components/public/ScrollToTop";

import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public website routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Admin dashboard routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;






// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import ScrollToTop from './components/public/ScrollToTop';

// import PublicRoutes from './routes/PublicRoutes';
// // import AdminRoutes from './routes/AdminRoutes';

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         {/* Public website */}
//         <Route path="/*" element={<PublicRoutes />} />

//         {/* Admin dashboard */}
//         {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
