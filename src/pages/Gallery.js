// // Example: src/pages/Gallery.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Gallery = () => (
//   <Box p={4}>
//     <Typography variant="h4" gutterBottom>Gallery Page</Typography>
//     <Typography>Content coming soon...</Typography>
//   </Box>
// );

// export default Gallery;



import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Box, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <Box>
      <PageBanner
        title="Moments in Harmony"
        subtitle="Our programs come alive in photos — the laughter, the harmony, the applause. 
        From backstage to the big stage, here are moments that capture the energy, creativity, 
        and joy of the Vocal Fusion experience."
        backgroundImage="/gallery-banner.jpg"
      />
      <Box sx={{ p: 4 }}>
        <Typography variant="body1">
          Gallery images coming soon...
        </Typography>
      </Box>
    </Box>
  );
};

export default Gallery;
