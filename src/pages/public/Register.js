import React from "react";
import PageBanner from "../../components/public/common/PageBanner";
import { Box, Divider } from "@mui/material";
import RegistrationForm from "../../components/public/register/RegistrationForm";
import EventCTASection from "../../components/public/register/EventCTASection";

const Register = () => {
  return (
    <Box>
      <PageBanner
        title="Register for the Choral Challenge"
        subtitle="Fill out the form below to enter your school’s choir into this year’s Choral Challenge. 
        Ensure all details are correct — this information will be used for scheduling, communication, 
        and event preparation."
        backgroundImage="/register-banner.jpg"
      />
      <Box>
        <RegistrationForm />
        <Divider />

        <EventCTASection />
        <Divider />
      </Box>
    </Box>
  );
};

export default Register;
