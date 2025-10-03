// src/components/choral-challange/ChoralChallangeIntro.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ChoralChallangeIntro = () => {
  return (
    <Box
      sx={{
        height: '712px',
        backgroundImage: `url(/choral-challenge-intro.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        px: 4,
        paddingLeft: "65px"
      }}
    >
        {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '712px',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          mt: 8,
          zIndex: 1,
        }}
      />
      <Box maxWidth="761px" sx={{mt: 20, zIndex: 2}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Choral Challenge is Here!
        </Typography>
        <Typography variant="body1" paragraph>
          The School’s Choral Challenge is a national platform for student choirs to showcase 
          harmony, teamwork, and musical excellence. It's more than a competition — it's a movement.
        </Typography>
        <Button
          variant="contained"
          color="error"
          component={RouterLink}
          to="/register"
          sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
        >
          Join the Conpetition
        </Button>
      </Box>
    </Box>
  );
};

export default ChoralChallangeIntro;
