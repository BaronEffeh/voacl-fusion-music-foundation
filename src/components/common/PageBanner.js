// src/components/common/PageBanner.js
import React from "react";
import { Box, Typography } from "@mui/material";

const PageBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <Box
      sx={{
        height: { xs: "236px", md: "356px" },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        textAlign: "left",
        color: "#fff",
        paddingLeft: "3rem"
      }}
    >
      {/* Dark overlay to reduce brightness */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Text content */}
      <Box sx={{ position: "relative", zIndex: 2, px: 2, maxWidth: "850px" }}>
        <Typography variant="h4" fontWeight="400" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PageBanner;
