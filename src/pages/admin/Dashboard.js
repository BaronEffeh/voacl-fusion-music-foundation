// src/pages/admin/Dashboard.jsx
import React from "react";
import { Box } from "@mui/material";
import SummaryOverview from "../../components/admin/dashboard/SummaryOverview";
import QuickActions from "../../components/admin/dashboard/QuickActions";
import RecentActivity from "../../components/admin/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <Box>
      <SummaryOverview />
      <QuickActions />
      <RecentActivity />
    </Box>
  );
}
