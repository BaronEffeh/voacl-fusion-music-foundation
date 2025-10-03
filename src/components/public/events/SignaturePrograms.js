// src/components/events/SignaturePrograms.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const SignaturePrograms = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', }}>

        <Typography variant="h5" gutterBottom mb={5}>
            Our Signature Programs
        </Typography>
      
      <Typography 
        variant="body1" 
        maxWidth="1152px" 
        gutterBottom
        mx="auto" 
        mb={2} 
        sx={{ 
          textAlign: 'center', 
          }}
        >
        Each of our events is thoughtfully crafted to build confidence, sharpen musical talent, and 
        create meaningful connections among students across diverse backgrounds — all through the shared 
        language of music. Whether on stage, in workshops, or during campfires, these experiences leave 
        lasting impressions that go beyond performance.
      </Typography>

    </Box>
  );
};

export default SignaturePrograms;
