import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
//   Typography,
} from "@mui/material";
import {
  Home,
  School,
  Event,
  Image,
  Message,
  Settings,
  Logout,
} from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <Home color="error" /> },
  { text: "School Registration", icon: <School /> },
  { text: "Events", icon: <Event /> },
  { text: "Gallery & Media", icon: <Image /> },
  { text: "Messages", icon: <Message /> },
  { text: "Settings", icon: <Settings /> },
  { text: "Logout", icon: <Logout /> },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#FFDDB329",
        // borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
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
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
            //   borderRadius: "0 20px 20px 0",
              mb: 1,
              backgroundColor: item.text === "Dashboard" ? "#c62828" : "transparent",
              color: item.text === "Dashboard" ? "#fff" : "#333",
              "&:hover": { backgroundColor: "#ef9a9a" },
            }}
          >
            <ListItemIcon
              sx={{
                color: item.text === "Dashboard" ? "#fff" : "#c62828",
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
        ))}
      </List>
    </Box>
  );
}
