// src/components/choral-challenge/ReadyToShine.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ReadyToShine = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', }}>

        <Typography variant="h5" gutterBottom mb={5}>
            Like Daniel, are your students ready to shine?
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
        Every student has a voice — and the stage is set for it to be heard. The School’s Choral 
        Challenge is more than just a competition; it’s an opportunity to build confidence, celebrate 
        teamwork, and spark a lifelong love for music. Give your choir the chance to grow, perform, and 
        inspire. Their journey to harmony begins with one simple step.
      </Typography>

      <Button
          variant="contained"
          color="error"
          component={RouterLink}
          to="/register"
          sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48, textTransform: 'none' }}
        >
          Register your school today
        </Button>

    </Box>
  );
};

export default ReadyToShine;
