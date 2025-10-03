// src/components/events/Expandtion.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Expandtion = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', }}>

        <Typography variant="h5" gutterBottom mb={2}>
            Want to Bring an Event to Your Region?
        </Typography>
      
      <Typography 
        variant="body1" 
        maxWidth="1152px" 
        gutterBottom
        mx="auto" 
        mb={2} 
        sx={{ 
          textAlign: 'center', 
          }}
        >
        We’re always expanding. If your school or community would like to host a 
        Vocal Fusion event, let’s talk.
      </Typography>

    </Box>
  );
};

export default Expandtion;
