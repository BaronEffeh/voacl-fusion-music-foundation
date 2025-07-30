// src/components/YearWinnerReview.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const YearWinnerReview = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', background: '#FFEEDC' }}>
      
      <Typography variant="body1" maxWidth="1152px" mx="auto" mb={5} sx={{ textAlign: 'center' }}>
        "Winning the 2025 Choral Challenge was a dream come true for us at St Patrick’s Secondary School, 
        Ikpayongo, Benue State. The journey from Day 1 to the final stage was filled with intense 
        rehearsals, new friendships, and unforgettable moments. Performing in front of such an amazing 
        audience and respected judges pushed us to give our absolute best. What made it even more special 
        was how the competition helped us grow as individuals and as a team. We learned discipline, 
        harmony, and how to lead with confidence. The workshop sessions before the main event were super 
        enlightening — they didn’t just prepare us musically, they built our mindset. We’re grateful to 
        Vocal Fusion Music Foundation for the platform and proud to be part of a movement that promotes 
        talent, unity, and excellence among Nigerian schools. We’ll never forget this experience — and 
        yes, we’ll definitely be back next year to defend our title!"
      </Typography>

      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Daniel Obagwu - St Patrick’s Secondary School, Ikpayngo, Benue State <br />
        (Winner, School’s Choral Challenge 2025)
      </Typography>
    </Box>
  );
};

export default YearWinnerReview;
