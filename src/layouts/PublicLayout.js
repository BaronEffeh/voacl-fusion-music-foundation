import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/public/global/Navbar";
import Footer from "../components/public/global/Footer";

export default function PublicLayout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
