import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WhoWeAre from '../../assets/who-we-are.png';

const WhyParticipate = () => {
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
        {/* Text Section */}
        <Grid item xs={12} md={6} sx={{width: "566px"}}>
          <Box sx={{ pr: { md: 1 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Participate?
            </Typography>
            <Typography variant="body1" paragraph>
              Every year, schools from across Nigeria converge for the Choral Challenge — Vocal Fusion’s 
              flagship musical competition that does more than crown winners. It inspires transformation. 
              This thrilling event empowers students by building confidence and refining their public 
              performance skills. It promotes music education by strengthening each school’s creative 
              culture, and fosters connection as choirs share the stage with peers from across the 
              nation. More than just a competition, the Choral Challenge is a platform for recognition, 
              celebration, and growth — with awards, trophies, and concert opportunities awaiting the 
              most outstanding performances.
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{width: "566px"}}>
          <Box
            component="img"
            src={WhoWeAre}
            alt="Vocal Fusion Team"
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyParticipate;
