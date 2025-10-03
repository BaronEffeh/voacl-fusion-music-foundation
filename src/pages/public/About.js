// Example: src/pages/About.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import AboutUsIntro from '../../components/public/about-us/AboutUsIntro';
import TheJourneySoFar from '../../components/public/about-us/TheJourneySoFar';
import VisionAndMission from '../../components/public/about-us/VisionAndMission';
import CoreValues from '../../components/public/about-us/CoreValues';
import ImpactStats from '../../components/public/about-us/ImpactStats';
import TeamSection from '../../components/public/about-us/TeamSection';

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
