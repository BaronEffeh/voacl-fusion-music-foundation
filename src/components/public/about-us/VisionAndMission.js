import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const VisionAndMission = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: '#EFDEE6',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        textAlign="center"
        justifyContent="space-between"
        px="50px"
        direction={{ xs: 'column', md: 'row' }}
      >
        <Grid item xs={12} md={6} sx={{width: "466px"}}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              A future where every child experiences the transformative power of music, 
              regardless of background or location.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{width: "466px"}}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              To inspire and empower students by providing inclusive, music-driven programs that 
              foster talent, teamwork, and confidence in school communities.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionAndMission;
