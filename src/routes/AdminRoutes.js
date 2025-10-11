// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        {/* Future routes go here */}
        {/* <Route path="events" element={<Events />} /> */}
        {/* <Route path="gallery" element={<Gallery />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;






// // src/routes/AdminRoutes.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../layouts/AdminLayout";
// import Dashboard from "../pages/admin/Dashboard";

// const AdminRoutes = () => {
//   return (
//     <AdminLayout>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         {/* Add more routes later: */}
//         {/* <Route path="events" element={<Events />} /> */}
//         {/* <Route path="gallery" element={<Gallery />} /> */}
//       </Routes>
//     </AdminLayout>
//   );
// };

// export default AdminRoutes;






// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../layouts/AdminLayout";
// import Dashboard from "../pages/admin/Dashboard";
// import Users from "../pages/admin/Users";
// import Events from "../pages/admin/Events";
// import Registrations from "../pages/admin/Registrations";
// import Reports from "../pages/admin/Reports";
// import ProtectedRoute from "./ProtectedRoute";

// export default function AdminRoutes() {
//   return (
//     <ProtectedRoute>
//       <AdminLayout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/registrations" element={<Registrations />} />
//           <Route path="/reports" element={<Reports />} />
//         </Routes>
//       </AdminLayout>
//     </ProtectedRoute>
//   );
// }
