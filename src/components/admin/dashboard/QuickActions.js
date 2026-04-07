// src/pages/admin/components/QuickActions.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';
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
          component={RouterLink}
          to={"/admin/events"}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black",
            "&:hover": {backgroundColor: "#FFDAD7"}, 
          }}
        >
          Create Event
        </Button>
        <Button variant="outlined" startIcon={<CreateNewFolderIcon />}
          component={RouterLink}
          to={"/admin/gallery"}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black",
            "&:hover": {backgroundColor: "#FFDAD7"}, 
          }}
        >
          Upload Gallery Item
        </Button>
        <Button variant="outlined" startIcon={<FindInPageIcon />}
          component={RouterLink}
          to={"/admin/school-registration"}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black",
            "&:hover": {backgroundColor: "#FFDAD7"}, 
          }}
        >
          View School Registrations
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<EditNoteIcon />}
          component={RouterLink}
          to={"/admin/events"}
          sx={{ 
            borderRadius: 5, 
            textTransform: "none", 
            border: "1px solid #FFDAD7", 
            color: "black",
            "&:hover": {backgroundColor: "#FFDAD7"},
          }}
        >
          Generate Event Code Pass
        </Button>
      </Box>
    </Box>
  );
};

export default QuickActions;
