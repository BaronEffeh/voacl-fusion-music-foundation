// Example: src/pages/ChoralChallenge.js
import React from 'react';
import { Box, Divider } from '@mui/material';
import ChoralChallangeIntro from '../../components/public/choral-challenge/ChoralChallengeIntro';
import WhyParticipate from '../../components/public/choral-challenge/WhyParticipate';
import HowItWorks from '../../components/public/choral-challenge/HowItWorks';
import FaqSection from '../../components/public/choral-challenge/FaqSection';
import YearWinnerReview from '../../components/public/choral-challenge/YearWinnerReview';
import ReadyToShine from '../../components/public/choral-challenge/ReadyToShine';

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
