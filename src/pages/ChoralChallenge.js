// Example: src/pages/ChoralChallenge.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import ChoralChallangeIntro from '../components/choral-challenge/ChoralChallengeIntro';
import WhyParticipate from '../components/choral-challenge/WhyParticipate';
import HowItWorks from '../components/choral-challenge/HowItWorks';
import FaqSection from '../components/choral-challenge/FaqSection';
import YearWinnerReview from '../components/choral-challenge/YearWinnerReview';
import ReadyToShine from '../components/choral-challenge/ReadyToShine';

const ChoralChallenge = () => (
  <Box>
    <ChoralChallangeIntro />
    <WhyParticipate />
    <Divider />
    <HowItWorks />
    <Divider />
    <FaqSection />
    <YearWinnerReview />
    <ReadyToShine />
    <Divider />
  </Box>
);

export default ChoralChallenge;
