// Example: src/pages/About.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import AboutUsIntro from '../components/about-us/AboutUsIntro';
import TheJourneySoFar from '../components/about-us/TheJourneySoFar';
import VisionAndMission from '../components/about-us/VisionAndMission';
import CoreValues from '../components/about-us/CoreValues';
import ImpactStats from '../components/about-us/ImpactStats';
import TeamSection from '../components/about-us/TeamSection';

const About = () => (
  <Box>
    <AboutUsIntro />
    <TheJourneySoFar />
    <VisionAndMission />
    <CoreValues />
    <Divider />
    <ImpactStats />
    <Divider />
    <TeamSection />
    <Divider />
  </Box>
);

export default About;
