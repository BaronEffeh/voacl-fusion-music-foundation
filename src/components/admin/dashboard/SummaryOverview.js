// src/pages/admin/components/SummaryOverview.jsx
import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { School, Event, Mail, Image as ImageIcon } from "@mui/icons-material";
import axios from "axios";

const API_BASE_URL = "https://vocal-fusion.onrender.com";

const SummaryOverview = () => {
  const [stats, setStats] = useState({
    schools: 0,
    events: 0,
    unreadMessages: 0,
    media: 0,
  });

  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    try {
      setLoading(true);

      const [
        schoolsRes,
        eventsRes,
        messagesRes,
        mediaRes,
      ] = await Promise.all([
        axios.get(`${API_BASE_URL}/schools`),
        axios.get(`${API_BASE_URL}/events`),
        axios.get(`${API_BASE_URL}/messages`),
        axios.get(`${API_BASE_URL}/media`),
      ]);

      const unreadCount = messagesRes.data.filter(
        (msg) => msg.status === "Unread"
      ).length;

      setStats({
        schools: schoolsRes.data.length || 0,
        events: eventsRes.data.filter((e) => e.status === "Upcoming").length || 0,
        unreadMessages: unreadCount,
        media: mediaRes.data.length || 0,
      });
    } catch (error) {
      console.error("Failed to load summary overview:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const cards = [
    {
      icon: <School color="error" />,
      label: "Registered Schools",
      value: stats.schools,
    },
    {
      icon: <Event color="warning" />,
      label: "Upcoming Events",
      value: stats.events,
    },
    {
      icon: <Mail color="error" />,
      label: "Unread Messages",
      value: stats.unreadMessages,
    },
    {
      icon: <ImageIcon color="secondary" />,
      label: "Media Uploaded",
      value: stats.media,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        padding: "16px",
        paddingBottom: "1px",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Admin Panel
      </Typography>

      <Grid container spacing={6} sx={{ mb: 3 }}>
        {cards.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: "16px",
                bgcolor: "#fff",
                border: "1px solid #FFB4AB",
                width: "216px",
                height: "144px",
                opacity: loading ? 0.6 : 1,
              }}
            >
              <Box>{item.icon}</Box>
              <Box>
                <Typography fontSize={24} fontWeight="bold">
                  {loading ? "…" : item.value}
                </Typography>
                <Typography fontSize={13}>{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SummaryOverview;





// // src/pages/admin/components/SummaryOverview.jsx
// import React from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import { School, Event, Mail, Image as ImageIcon } from "@mui/icons-material";

// const SummaryOverview = () => {
//   const stats = [
//     { icon: <School color="error" />, label: "Registered Schools", value: "08" },
//     { icon: <Event color="warning" />, label: "Upcoming Events", value: "02" },
//     { icon: <Mail color="error" />, label: "Unread Messages", value: "12" },
//     { icon: <ImageIcon color="secondary" />, label: "Media Uploaded", value: "250" },
//   ];

//   return (
//     <Box sx={{bgcolor: "#fff", padding: "16px", paddingBottom: "1px", borderRadius: "16px"}}>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         Admin Panel
//       </Typography>

//       <Grid container spacing={6} sx={{ mb: 3 }}>
//         {stats.map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 borderRadius: "16px",
//                 bgcolor: "#fff",
//                 border: "1px solid #FFB4AB",
//                 width: "216px",
//                 height: "144px"
//               }}
//             >
//               <Box>{item.icon}</Box>
//               <Box>
//                 <Typography fontSize={24} fontWeight="bold">
//                   {item.value}
//                 </Typography>
//                 <Typography fontSize={13}>{item.label}</Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default SummaryOverview;
