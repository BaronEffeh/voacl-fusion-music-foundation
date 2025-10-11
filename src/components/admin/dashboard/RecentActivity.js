// src/pages/admin/components/RecentActivity.jsx
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  // TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
} from "@mui/material";

const RecentActivity = () => {
  const recentActivities = Array(5).fill({
    activity: "New school registered: Gracefield College",
    date: "Jul 15",
    status: "Completed",
  });

  return (
    <Box>
      <Card sx={{ overflow: "hidden" }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Recent Activity
          </Typography>
          {/* <TableContainer component={Paper} sx={{ borderRadius: 2 }}> */}
            <Table>
              <TableHead sx={{ backgroundColor: "#fde0e0" }}>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentActivities.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.activity}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          {/* </TableContainer> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecentActivity;
