import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WhoWeAre from '../../assets/who-we-are.png';

const FoundersWord = () => {
  return (
    <Box
      sx={{
        // textAlign: 'center',
        height: "528px",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        // backgroundColor: '#fff7f7',
      }}
    >
        <Typography variant="h5" fontWeight="bold" textAlign='center' mb="24px" gutterBottom>
          Our Founder’s Words
        </Typography>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        direction={{ xs: 'column', md: 'row' }}
        gap="32px"
      >
        {/* Text Section */}
        <Grid item xs={12} md={6} sx={{width: "466px"}}>
          <Box sx={{ pr: { md: 1 } }}>
            
            <Typography variant="body1" paragraph>
              "Vocal Fusion was born out of a passion to see young voices nurtured with purpose and 
              excellence. Music is not just art—it’s a tool for discipline, unity, and expression. 
              Through this platform, we raise a generation that sings with heart and leads with vision."
            </Typography>

          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{width: "666px"}}>
          <Box
            component="img"
            src={WhoWeAre}
            alt="Founder's Word Image"
            sx={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
            //   borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoundersWord;
