import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WhoWeAre from '../../assets/who-we-are.png';

const Overview = () => {
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
        <Grid item xs={12} md={6} sx={{width: "466px"}}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Who we are
            </Typography>
            <Typography variant="body1" paragraph>
              Vocal Fusion Music Foundation is a music-based non-governmental organization (NGO)
              dedicated to harnessing the transformative power of music to inspire, educate, and
              empower individuals and communities. Through innovative music programs, workshops, and
              performances, we strive to foster creativity, promote cultural exchange, and build
              bridges between diverse communities.
            </Typography>
            <Button
              variant="contained"
              color="error"
              component={RouterLink}
              to="/about"
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{width: "666px"}}>
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

export default Overview;
