import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import {
  Event,
  Group,
  NotificationsActive,
  Edit,
  Delete,
} from "@mui/icons-material";

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

const events = [
  {
    title: "Voice Training Workshop",
    type: "Workshop",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Choral Challenge",
    type: "Competition",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Winners Concert",
    type: "Concert",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Voice Training Workshop",
    type: "Workshop",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Choral Challenge",
    type: "Competition",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Winners Concert",
    type: "Concert",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
];

export default function EventManager() {
  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
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
        >
          Add Event
        </Button>
      </Box>

      {/* Stat Cards */}
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
              <CardContent sx={{width: "245px", height: "144px"}}>
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

      {/* Event Table */}
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Event List
          </Typography>

          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#fff0f0" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.type}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: "#350830" }}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#350830" }}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: "#999" }}
          >
            Showing 1 to {events.length} of {events.length} entries
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
