import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import WhoWeAre from '../../assets/who-we-are.png';
import { useNavigate } from 'react-router-dom';

const VideoSection = () => {
    const navigate = useNavigate();

    const handleViewMoreOnYouTube = () => {
        navigate('https://youtube.com');
    };
  return (
    <Box
      sx={{
        height: "528px",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
      }}
    >
        <Typography variant="h5" textAlign='center' mb="24px" gutterBottom>
          Watch Our Videos
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
              Explore the heart of Vocal Fusion through our video gallery — featuring highlights from 
              choral performances, workshops, and behind-the-scenes moments. Browse by event or year, 
              preview clips, and engage by liking, commenting, or sharing. Whether you're a student, 
              parent, or music enthusiast, relive the moments that make our journey unforgettable.
            </Typography>

          </Box>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleViewMoreOnYouTube} 
            target='blank'
            sx={{ textTransform: 'none'}}
        >
            View More on YouTube
        </Button>
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

export default VideoSection;
