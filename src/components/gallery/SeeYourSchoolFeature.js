// src/components/gallery/SeeYourSchoolFeature.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SeeYourSchoolFeature = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', }}>

        <Typography variant="h5" gutterBottom mb={5}>
            Want to see your school featured here?
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
        Every unforgettable performance begins with a single step. Whether it’s your first time on stage 
        or your next big return, there’s always room for new voices, new stories, and new moments that 
        make history. Be part of the next big moment — where passion meets purpose, and music brings it 
        all to life.
      </Typography>

      <Button
          variant="contained"
          color="error"
          component={RouterLink}
          to="/register"
          sx={{ borderRadius: '16px', height: 48, textTransform: 'none' }}
        >
          Register for Choral Challenge
        </Button>

    </Box>
  );
};

export default SeeYourSchoolFeature;
