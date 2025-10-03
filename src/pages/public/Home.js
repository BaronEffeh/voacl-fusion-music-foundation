// Example: src/pages/Home.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import HeroSection from '../../components/public/home/HeroSection';
import Overview from '../../components/public/home/Overview';
import SchoolChoralChallange from '../../components/public/home/SchoolChoralChallange';
import SchoolCommunity from '../../components/public/home/SchoolCommunity';
import UpcomingEvents from '../../components/public/home/UpcomingEvents';
import CapturedMoments from '../../components/public/home/CapturedMoments';
import TestimonialCarousel from '../../components/public/home/TestimonialCarousel';
import FoundersWord from '../../components/public/home/FoundersWord';

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
    <FoundersWord />
    <Divider />
    <TestimonialCarousel />
    <Divider />
  </Box>
);

export default Home;
