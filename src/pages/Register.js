import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Box, Typography } from "@mui/material";
import RegistrationForm from "../components/register/RegistrationForm";

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
      <Box sx={{ p: 4 }}>
        <RegistrationForm />
        <Typography variant="body1">
          Registration page content comming up soon...
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
