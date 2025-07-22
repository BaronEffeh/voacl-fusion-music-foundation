// Example: src/pages/Home.js
import React from 'react';
import { Box, } from '@mui/material';
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
    <hr style={{border: '0.1px solid #62400029'}}/>
    <SchoolChoralChallange />
    <hr style={{border: '0.1px solid #62400029'}}/>
    <SchoolCommunity />
    <hr style={{border: '0.1px solid #62400029'}}/>
    <UpcomingEvents />
    <hr style={{border: '0.1px solid #62400029'}}/>
    <CapturedMoments />
    <hr style={{border: '0.1px solid #62400029'}}/>
    <TestimonialCarousel />
    <hr style={{border: '0.1px solid #62400029'}}/>
  </Box>
);

export default Home;
