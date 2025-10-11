// src/pages/admin/components/QuickActions.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EditNoteIcon from '@mui/icons-material/EditNote';

const QuickActions = () => {
  return (
    <Box sx={{ bgcolor: "#fff", padding: "16px", borderRadius: "16px", mb: 4, mt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Quick Actions
      </Typography>
      <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        <Button
          variant="outlined"
          startIcon={<Add />}
          // color="error"
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black" 
          }}
        >
          Create Event
        </Button>
        <Button variant="outlined" startIcon={<CreateNewFolderIcon />}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black" 
          }}
        >
          Upload Gallery Item
        </Button>
        <Button variant="outlined" startIcon={<FindInPageIcon />}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black" 
          }}
        >
          View School Registrations
        </Button>
        <Button variant="outlined" startIcon={<EditNoteIcon />}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black" 
          }}
        >
          Generate Event Code Pass
        </Button>
      </Box>
    </Box>
  );
};

export default QuickActions;
