// // Example: src/pages/Contact.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Contact = () => (
//   <Box p={4}>
//     <Typography variant="h4" gutterBottom>Contact Page</Typography>
//     <Typography>Content coming soon...</Typography>
//   </Box>
// );

// export default Contact;



import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <PageBanner
        title="We’d Love to Hear from You"
        subtitle="Whether you’re a school interested in partnering with us, a parent with questions 
        about our programs, or a music lover wanting to get involved — we’re just a message away. 
        Reach out and let’s connect through the power of music."
        backgroundImage="/contact-banner.jpg"
      />
      <Box sx={{ p: 4 }}>
        <Typography variant="body1">
          Contact details coming soon...
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
