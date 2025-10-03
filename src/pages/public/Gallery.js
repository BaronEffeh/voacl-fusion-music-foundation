import React from "react";
import PageBanner from "../../components/public/common/PageBanner";
import { Box, Divider } from "@mui/material";
import CoralChallenge2025 from "../../components/public/gallery/CoralChallenge2025";
import CoralChallenge2023 from "../../components/public/gallery/CoralChallenge2023";
import VideoSection from "../../components/public/gallery/VideoSection";
import SeeYourSchoolFeature from "../../components/public/gallery/SeeYourSchoolFeature";

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
      <Box sx={{ p: 2 }}>
        <CoralChallenge2025 />
        <Divider />

        <CoralChallenge2023 />
        <Divider />

        <VideoSection />
        <Divider />

        <SeeYourSchoolFeature />
        <Divider />
        
      </Box>
    </Box>
  );
};

export default Gallery;
