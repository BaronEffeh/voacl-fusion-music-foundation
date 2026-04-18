import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  HomeWork,
  Event,
  Collections,
  Inbox,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Home />, path: "/admin/dashboard" },
  { text: "School Registration", icon: <HomeWork />, path: "/admin/school-registration" },
  { text: "Events", icon: <Event />, path: "/admin/events" },
  { text: "Gallery & Media", icon: <Collections />, path: "/admin/gallery" },
  { text: "Messages", icon: <Inbox />, path: "/admin/messages" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" },
  { text: "Logout", icon: <Logout />, action: "logout" }
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: "#FFDDB329",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        position: "sticky",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          bgcolor: "#fff",
          mb: 3,
          backgroundImage: `url('/logo.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Navigation */}
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItemButton
              key={index}
              // onClick={() => navigate(item.path)}
              onClick={() => {
                if (item.action === "logout") {
                  handleLogout();
                } else {
                  navigate(item.path);
                }
              }}
              sx={{
                mb: 1,
                backgroundColor: isActive ? "#c62828" : "transparent",
                color: isActive ? "#fff" : "#350830",
                "&:hover": {
                  backgroundColor: isActive ? "#b71c1c" : "#ef9a9a",
                  // color: "#fff",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? "#fff" : "#350830",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}






// import React from "react";
// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// //   Typography,
// } from "@mui/material";
// import {
//   Home,
//   School,
//   Event,
//   Image,
//   Message,
//   Settings,
//   Logout,
// } from "@mui/icons-material";

// const menuItems = [
//   { text: "Dashboard", icon: <Home color="error" /> },
//   { text: "School Registration", icon: <School /> },
//   { text: "Events", icon: <Event /> },
//   { text: "Gallery & Media", icon: <Image /> },
//   { text: "Messages", icon: <Message /> },
//   { text: "Settings", icon: <Settings /> },
//   { text: "Logout", icon: <Logout /> },
// ];

// export default function Sidebar() {
//   return (
//     <Box
//       sx={{
//         width: 240,
//         bgcolor: "#FFDDB329",
//         // borderRight: "1px solid #e0e0e0",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         py: 2,
//       }}
//     >
//       {/* Logo */}
//       <Box
//         sx={{
//           width: 100,
//           height: 100,
//           borderRadius: "50%",
//           bgcolor: "#fff",
//           mb: 3,
//           backgroundImage: `url('/logo.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Navigation */}
//       <List sx={{ width: "100%" }}>
//         {menuItems.map((item, index) => (
//           <ListItemButton
//             key={index}
//             sx={{
//             //   borderRadius: "0 20px 20px 0",
//               mb: 1,
//               backgroundColor: item.text === "Dashboard" ? "#c62828" : "transparent",
//               color: item.text === "Dashboard" ? "#fff" : "#333",
//               "&:hover": { backgroundColor: "#ef9a9a" },
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 color: item.text === "Dashboard" ? "#fff" : "#c62828",
//                 minWidth: 40,
//               }}
//             >
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText
//               primary={item.text}
//               primaryTypographyProps={{ fontSize: 14 }}
//             />
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// }
