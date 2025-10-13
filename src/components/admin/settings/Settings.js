import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function Settings() {
  const adminUsers = [
    {
      name: "Grace Akinwale",
      email: "gracekinale@gmail.com",
      role: "Admin",
      lastLogin: "22/05/2025",
      status: "Active",
    },
    {
      name: "Grace Akinwale",
      email: "gracekinale@gmail.com",
      role: "Editor",
      lastLogin: "22/05/2025",
      status: "Active",
    },
    {
      name: "Grace Akinwale",
      email: "gracekinale@gmail.com",
      role: "Editor",
      lastLogin: "22/05/2025",
      status: "Inactive",
    },
    {
      name: "Grace Akinwale",
      email: "gracekinale@gmail.com",
      role: "Editor",
      lastLogin: "22/05/2025",
      status: "Active",
    },
  ];

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Settings
      </Typography>

      {/* Assign Admin Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="outlined"
          color="error"
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Assign Admin
        </Button>
      </Box>

      {/* Change Password Section */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Change Password
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              label="Current Password"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="outlined"
            color="error"
            sx={{
              borderRadius: 5,
              textTransform: "none",
              px: 3,
            }}
          >
            Change Password
          </Button>
        </Box>
      </Paper>

      {/* Admin Users Section */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: "#fff" }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Admin Users
        </Typography>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#fde0e0" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: "#350830" }}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#350830" }}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          variant="body2"
          sx={{ mt: 1, fontSize: 13, color: "gray" }}
        >
          Showing 1 to {adminUsers.length} of {adminUsers.length} entries
        </Typography>
      </Paper>
    </Box>
  );
}
