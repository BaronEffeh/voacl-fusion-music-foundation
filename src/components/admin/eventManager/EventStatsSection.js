import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Event, Group, NotificationsActive } from "@mui/icons-material";
import axios from "axios";

const API_BASE_URL = "https://vocal-fusion.onrender.com";

export default function EventStatsSection({ onAddEventClick }) {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalAttendance: 0,
    nextEvent: null, // { title, location, daysLeft }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventStats();
  }, []);

  const fetchEventStats = async () => {
    try {
      setLoading(true);

      /**
       * Assumed endpoints (adjust if your backend differs):
       * GET /events/stats
       * Response example:
       * {
       *   totalEvents: 6,
       *   totalAttendance: 556,
       *   nextEvent: {
       *     title: "Winners Concert",
       *     location: "Abuja",
       *     daysLeft: 3
       *   }
       * }
       */

      const res = await axios.get(`${API_BASE_URL}/events/stats`);
      setStats(res.data);
    } catch (error) {
      console.error("Failed to fetch event stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const eventStats = [
    {
      icon: <Event sx={{ color: "#d32f2f" }} />,
      value: stats.totalEvents,
      label: "Total Events Organized",
    },
    {
      icon: <Group sx={{ color: "#f57c00" }} />,
      value: stats.totalAttendance,
      label: "Total Attendance",
    },
    {
      icon: <NotificationsActive sx={{ color: "#c62828" }} />,
      value: stats.nextEvent
        ? `In ${stats.nextEvent.daysLeft} days`
        : "---",
      label: stats.nextEvent
        ? `${stats.nextEvent.title}, ${stats.nextEvent.location}`
        : "No upcoming event",
    },
  ];

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
        <CardContent
          sx={{
            width: "245px",
            height: "144px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress color="error" />
            </Box>
          ) : (
            <>
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
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      {/* <Grid container spacing={6} sx={{ mb: 4 }}>
        {loading ? (
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: 4,
              }}
            >
              <CircularProgress color="error" />
            </Box>
          </Grid>
        ) : (
          eventStats.map((stat, index) => (
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
          ))
        )}
      </Grid> */}
    </Box>
  );
}







// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { Event, Group, NotificationsActive } from "@mui/icons-material";

// const eventStats = [
//   {
//     icon: <Event sx={{ color: "#d32f2f" }} />,
//     value: "06",
//     label: "Total Events Organized",
//   },
//   {
//     icon: <Group sx={{ color: "#f57c00" }} />,
//     value: "556",
//     label: "Total Attendance",
//   },
//   {
//     icon: <NotificationsActive sx={{ color: "#c62828" }} />,
//     value: "In 3 days",
//     label: "Winners Concert, Abuja",
//   },
// ];

// export default function EventStatsSection({ onAddEventClick }) {
//   return (
//     <Box>
//       {/* Header with Add Event Button */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 3,
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Event Manager
//         </Typography>
//         <Button
//           variant="outlined"
//           sx={{
//             borderRadius: "16px",
//             textTransform: "none",
//             bgcolor: "#FFFFFF",
//             borderColor: "#d32f2f",
//             color: "#d32f2f",
//             "&:hover": { bgcolor: "#fde0dc" },
//           }}
//           onClick={onAddEventClick}
//         >
//           Add Event
//         </Button>
//       </Box>

//       {/* Event Stat Cards */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {eventStats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 borderRadius: 3,
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                 bgcolor: "#fff5f5",
//                 border: "1px solid #FFB4AB",
//               }}
//             >
//               <CardContent sx={{ width: "245px", height: "144px" }}>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   {stat.icon}
//                   <Typography
//                     variant="h5"
//                     sx={{ ml: 2, fontWeight: "bold", color: "#333" }}
//                   >
//                     {stat.value}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: "#666" }}>
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
