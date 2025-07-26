// Example: src/pages/About.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutUsIntro from '../components/about-us/AboutUsIntro';
import TheJourneySoFar from '../components/about-us/TheJourneySoFar';

const About = () => (
  <Box>
    <AboutUsIntro />
    <TheJourneySoFar />
    <Typography variant="h4" gutterBottom>About Us</Typography>
    <Typography>Content coming soon...</Typography>
  </Box>
);

export default About;
