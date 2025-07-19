// Example: src/pages/Home.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
// import Overview from '../components/home/Overview';
import Overview from '../components/home/Overview';
import SchoolChoralChallange from '../components/home/SchoolChoralChallange';
import SchoolCommunity from '../components/home/SchoolCommunity';

const Home = () => (
  <Box>
    <HeroSection />
    {console.log('Overview:', Overview)}
    <Overview />
    <SchoolChoralChallange />
    <SchoolCommunity />

    {/* <Overview /> */}
    <Typography variant="h4" gutterBottom>Home</Typography>
    <Typography>Content coming soon...</Typography>
  </Box>
);

export default Home;
