// src/components/about-us/AboutUsIntro.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AboutUsIntro = () => {
  return (
    <Box
      sx={{
        height: '712px',
        backgroundImage: `url(/about-intro-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        px: 4,
        paddingLeft: "65px",
        filter: 'brightness(0.4)'
      }}
    >
      <Box maxWidth="761px" sx={{mt: 20}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          We are VFMF - Music is Life
        </Typography>
        <Typography variant="body1" paragraph>
          We believe that every student has a voice worth hearing. Through choral expression, 
          we empower schools, inspire students, and build a generation connected through creativity 
          and harmony.
        </Typography>
        <Button
          variant="contained"
          color="error"
          component={RouterLink}
          to="#"
          sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsIntro;
