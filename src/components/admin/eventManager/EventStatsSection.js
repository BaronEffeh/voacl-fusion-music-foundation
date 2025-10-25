import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Event, Group, NotificationsActive } from "@mui/icons-material";

const eventStats = [
  {
    icon: <Event sx={{ color: "#d32f2f" }} />,
    value: "06",
    label: "Total Events Organized",
  },
  {
    icon: <Group sx={{ color: "#f57c00" }} />,
    value: "556",
    label: "Total Attendance",
  },
  {
    icon: <NotificationsActive sx={{ color: "#c62828" }} />,
    value: "In 3 days",
    label: "Winners Concert, Abuja",
  },
];

export default function EventStatsSection({ onAddEventClick }) {
  return (
    <Box>
      {/* Header with Add Event Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Event Manager
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "16px",
            textTransform: "none",
            bgcolor: "#FFFFFF",
            borderColor: "#d32f2f",
            color: "#d32f2f",
            "&:hover": { bgcolor: "#fde0dc" },
          }}
          onClick={onAddEventClick}
        >
          Add Event
        </Button>
      </Box>

      {/* Event Stat Cards */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {eventStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                bgcolor: "#fff5f5",
                border: "1px solid #FFB4AB",
              }}
            >
              <CardContent sx={{ width: "245px", height: "144px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {stat.icon}
                  <Typography
                    variant="h5"
                    sx={{ ml: 2, fontWeight: "bold", color: "#333" }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
