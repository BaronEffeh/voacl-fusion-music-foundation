// Example: src/pages/Home.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import Overview from '../components/home/Overview';
import SchoolChoralChallange from '../components/home/SchoolChoralChallange';
import SchoolCommunity from '../components/home/SchoolCommunity';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CapturedMoments from '../components/home/CapturedMoments';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const Home = () => (
  <Box>
    <HeroSection />
    {console.log('Overview:', Overview)}
    <Overview />
    <Divider />
    <SchoolChoralChallange />
    <Divider />
    <SchoolCommunity />
    <Divider />
    <UpcomingEvents />
    <Divider />
    <CapturedMoments />
    <Divider />
    <TestimonialCarousel />
    <Divider />
  </Box>
);

export default Home;
