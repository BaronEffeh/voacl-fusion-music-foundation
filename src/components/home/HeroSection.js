// src/components/home/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '712px',
        backgroundImage: `url(/hero-image1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        px: 4,
        paddingLeft: "65px"
      }}
    >
      <Box maxWidth="761px" sx={{mt: 20}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to Vocal Fusion Music Foundation
        </Typography>
        <Typography variant="body1" paragraph>
          Music is life — a language of unity, growth, and self-expression. 
          At the heart of every song we nurture is a student discovering their voice, 
          a school building stronger community, and a future shaped through harmony. 
          Vocal Fusion Music Foundation creates these moments through programs like the School’s 
          Choral Challenge, workshops, and music camps.
        </Typography>
        <Button
          variant="contained"
          color="error"
          component={RouterLink}
          to="/register"
          sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
        >
          Register for Choral Challenge
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
