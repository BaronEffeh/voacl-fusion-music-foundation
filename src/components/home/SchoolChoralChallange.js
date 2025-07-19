import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SccImage from '../../assets/school-choral-challenge.png';
const SchoolChoralChallange = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        // backgroundColor: '#fff7f7',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        direction={{ xs: 'column', md: 'row' }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{width: "666px"}}>
          <Box
            component="img"
            src={SccImage}
            alt="Vocal Fusion Team"
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
            //   borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6} sx={{width: "466px"}}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Schools’ Choral Challenge
            </Typography>
            <Typography variant="body1" paragraph sx={{lineHeight: "30px"}}>
              Every year, schools from across the nation gather for a celebration of harmony, 
              teamwork, and youthful talent. The School’s Choral Challenge is more than a 
              competition — it’s a platform where students build confidence, friendships, 
              and unforgettable memories through music.
            </Typography>
            <Button
              variant="contained"
              color="error"
              component={RouterLink}
              to="/about"
              sx={{ mt: 2 }}
            >
              Click here to register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SchoolChoralChallange;
