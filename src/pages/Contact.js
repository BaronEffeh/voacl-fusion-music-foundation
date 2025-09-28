import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Box } from "@mui/material";
import ContactForm from "../components/contactUs/ContactForm";
import ContactDirect from "../components/contactUs/ContactDirect";

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
      <Box>
        <ContactForm />

        <ContactDirect />

      </Box>
    </Box>
  );
};

export default Contact;
