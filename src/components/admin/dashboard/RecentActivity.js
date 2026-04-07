// src/pages/admin/components/RecentActivity.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const API_BASE_URL = "https://vocal-fusion.onrender.com";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecentActivity = async () => {
    try {
      setLoading(true);

      // Fetch from existing endpoints
      const [schoolsRes, messagesRes, mediaRes, eventsRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/schools`),
        axios.get(`${API_BASE_URL}/messages`),
        axios.get(`${API_BASE_URL}/media`),
        axios.get(`${API_BASE_URL}/events`),
      ]);

      const schools = schoolsRes.data || [];
      const messages = messagesRes.data || [];
      const media = mediaRes.data || [];
      const events = eventsRes.data || [];

      // Normalize everything into one format
      const schoolActivities = schools.map((s) => ({
        id: s.id || s._id,
        activity: `New school registered: ${s.school_name || s.name}`,
        created_at: s.created_at,
        status: "Completed",
      }));

      const messageActivities = messages.map((m) => ({
        id: m.id || m._id,
        activity: `New message from ${m.sender_name}`,
        created_at: m.created_at,
        status: m.status === "Unread" ? "Pending" : "Completed",
      }));

      const mediaActivities = media.map((m) => ({
        id: m.id || m._id,
        activity: `New ${m.mediaType} uploaded: ${m.caption || "Gallery item"}`,
        created_at: m.created_at,
        status: "Completed",
      }));

      const eventActivities = events.map((e) => ({
        id: e.id || e._id,
        activity: `New event created: ${e.title || e.name}`,
        created_at: e.created_at,
        status: "Completed",
      }));

      // Merge all activities
      const allActivities = [
        ...schoolActivities,
        ...messageActivities,
        ...mediaActivities,
        ...eventActivities,
      ];

      // Sort by latest first
      allActivities.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Keep only the 5 most recent
      setActivities(allActivities.slice(0, 5));
    } catch (error) {
      console.error("Failed to fetch recent activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  return (
    <Box>
      <Card sx={{ overflow: "hidden" }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Recent Activity
          </Typography>

          <Table>
            <TableHead sx={{ backgroundColor: "#fde0e0" }}>
              <TableRow>
                <TableCell>Activity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                    <CircularProgress size={24} color="error" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Loading recent activities...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : activities.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No recent activity found.
                  </TableCell>
                </TableRow>
              ) : (
                activities.map((row, index) => (
                  <TableRow key={`${row.id}-${index}`}>
                    <TableCell>{row.activity}</TableCell>
                    <TableCell>{formatDate(row.created_at)}</TableCell>
                    <TableCell
                      sx={{
                        color:
                          row.status === "Completed"
                            ? "success.main"
                            : "warning.main",
                        fontWeight: 500,
                      }}
                    >
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecentActivity;






// // src/pages/admin/components/RecentActivity.jsx
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const API_BASE_URL = "https://vocal-fusion.onrender.com";

// const RecentActivity = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchRecentActivity = async () => {
//     try {
//       setLoading(true);

//       /*
//         We assume your backend exposes something like:
//         GET /activities/recent
//         which returns:
//         [
//           {
//             id: 1,
//             activity: "New school registered: Gracefield College",
//             created_at: "2026-01-23T09:21:00Z",
//             status: "Completed"
//           }
//         ]
//       */

//       const res = await axios.get(`${API_BASE_URL}/activities/recent`);

//       setActivities(res.data || []);
//     } catch (error) {
//       console.error("Failed to fetch recent activities:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentActivity();
//   }, []);

//   const formatDate = (date) =>
//     new Date(date).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//     });

//   return (
//     <Box>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Recent Activity
//           </Typography>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>Activity</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {loading ? (
//                 <TableRow>
//                   <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
//                     <CircularProgress size={24} color="error" />
//                     <Typography variant="body2" sx={{ mt: 1 }}>
//                       Loading recent activities...
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : activities.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={3} align="center">
//                     No recent activity found.
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 activities.slice(0, 5).map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{row.activity}</TableCell>
//                     <TableCell>{formatDate(row.created_at)}</TableCell>
//                     <TableCell
//                       sx={{
//                         color:
//                           row.status === "Completed"
//                             ? "success.main"
//                             : "warning.main",
//                         fontWeight: 500,
//                       }}
//                     >
//                       {row.status}
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default RecentActivity;





// // src/pages/admin/components/RecentActivity.jsx
// import React from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   // TableContainer,
//   TableHead,
//   TableRow,
//   Card,
//   CardContent,
// } from "@mui/material";

// const RecentActivity = () => {
//   const recentActivities = Array(5).fill({
//     activity: "New school registered: Gracefield College",
//     date: "Jul 15",
//     status: "Completed",
//   });

//   return (
//     <Box>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Recent Activity
//           </Typography>
//           {/* <TableContainer component={Paper} sx={{ borderRadius: 2 }}> */}
//             <Table>
//               <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//                 <TableRow>
//                   <TableCell>Activity</TableCell>
//                   <TableCell>Date</TableCell>
//                   <TableCell>Status</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {recentActivities.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row.activity}</TableCell>
//                     <TableCell>{row.date}</TableCell>
//                     <TableCell>{row.status}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           {/* </TableContainer> */}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default RecentActivity;
