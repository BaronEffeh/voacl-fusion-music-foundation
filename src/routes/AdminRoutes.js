// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import SchoolRegistration from "../components/admin/schoolRegistration/SchoolRegistration";
import EventsPage from "../pages/admin/EventsPage";
import Gallery from "../pages/admin/Gallery";
import MessagesPage from "../pages/admin/MessagesPage";
import SettingsPage from "../pages/admin/SettingsPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="school-registration" element={<SchoolRegistration />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        {/* Future routes go here */}
        {/* <Route path="events" element={<Events />} /> */}
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
