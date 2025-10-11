// src/layouts/AdminLayout.jsx
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#fdf5f7" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}





// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "../components/admin/Sidebar";
// import Dashboard from "../pages/admin/Dashboard";

// export default function AdminLayout() {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#fdf5f7" }}>
//       <Sidebar />
//       <Box sx={{ flexGrow: 1, p: 3 }}>
//         <Dashboard />
//       </Box>
//     </Box>
//   );
// }
