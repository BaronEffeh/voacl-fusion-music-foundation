// Example: src/pages/ChoralChallenge.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChoralChallangeIntro from '../components/choral-challenge/ChoralChallengeIntro';
import WhyParticipate from '../components/choral-challenge/WhyParticipate';
import HowItWorks from '../components/choral-challenge/HowItWorks';
import FaqSection from '../components/choral-challenge/FaqSection';
import YearWinnerReview from '../components/choral-challenge/YearWinnerReview';

const ChoralChallenge = () => (
  <Box>
    <ChoralChallangeIntro />
    <WhyParticipate />
    <HowItWorks />
    <FaqSection />
    <YearWinnerReview />
    <Typography variant="h4" gutterBottom>Choral Challenge</Typography>
    <Typography>Content coming soon...</Typography>
  </Box>
);

export default ChoralChallenge;
