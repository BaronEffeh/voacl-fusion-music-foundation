// src/pages/admin/components/QuickActions.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const QuickActions = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Quick Actions
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="outlined"
          startIcon={<Add />}
          color="error"
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Create Event
        </Button>
        <Button variant="outlined" sx={{ borderRadius: 5, textTransform: "none" }}>
          Upload Gallery Item
        </Button>
        <Button variant="outlined" sx={{ borderRadius: 5, textTransform: "none" }}>
          View School Registrations
        </Button>
        <Button variant="outlined" sx={{ borderRadius: 5, textTransform: "none" }}>
          Generate Event Code Pass
        </Button>
      </Box>
    </Box>
  );
};

export default QuickActions;
