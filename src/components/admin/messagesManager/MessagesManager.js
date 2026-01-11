import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import {
  Mail,
  MarkEmailUnread,
  Reply,
  AccessTime,
  Edit,
  Delete,
  Visibility,
  Send,
  Close,
} from "@mui/icons-material";
import axios from "axios";

const API_BASE_URL = "https://vocal-fusion.onrender.com";

export default function MessagesManager() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  /** Fetch messages */
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/messages`);
      setMessages(res.data || []);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  /** Derived stats */
  const stats = useMemo(() => {
    const total = messages.length;
    const unread = messages.filter((m) => m.status === "Unread").length;
    const replied = messages.filter((m) => m.status === "Replied").length;

    const lastMessageTime = messages[0]?.created_at
      ? new Date(messages[0].created_at).toLocaleString()
      : "—";

    return [
      { icon: <Mail color="error" />, label: "Total Messages", value: total },
      { icon: <MarkEmailUnread color="warning" />, label: "Unread Messages", value: unread },
      { icon: <Reply color="error" />, label: "Replied Messages", value: replied },
      { icon: <AccessTime color="secondary" />, label: "Last Message", value: lastMessageTime },
    ];
  }, [messages]);

  /** Filtering */
  const filteredMessages =
    filter === "All"
      ? messages
      : messages.filter((msg) => msg.status === filter);

  const handleView = (msg) => {
    setSelectedMsg(msg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMsg(null);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Messages
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Send />}
          color="error"
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Send Bulk Message
        </Button>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {stats.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={0}
              sx={{
                width: "216px",
                height: "144px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid #FFB4AB",
                borderRadius: "16px",
              }}
            >
              <Box>{item.icon}</Box>
              <Box>
                <Typography fontSize={24} fontWeight="bold">
                  {item.value}
                </Typography>
                <Typography fontSize={13}>{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Message Center */}
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Message Center
          </Typography>

          {/* Filters */}
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {["All", "Unread", "Read", "Replied"].map((type) => (
              <Button
                key={type}
                size="small"
                variant={filter === type ? "contained" : "outlined"}
                color="error"
                onClick={() => setFilter(type)}
                sx={{ borderRadius: 5, textTransform: "none", fontSize: 13, px: 2 }}
              >
                {type}
              </Button>
            ))}
          </Stack>

          {loading ? (
            <Box display="flex" justifyContent="center" py={4}>
              <CircularProgress color="error" />
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ backgroundColor: "#fde0e0" }}>
                <TableRow>
                  <TableCell>Sender Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Subject/Topic</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredMessages.map((msg) => (
                  <TableRow key={msg.id}>
                    <TableCell>{msg.sender_name}</TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell>{msg.subject}</TableCell>
                    <TableCell>
                      {new Date(msg.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{msg.status}</TableCell>
                    <TableCell>
                      <Visibility
                        fontSize="small"
                        sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
                        onClick={() => handleView(msg)}
                      />
                      <Edit fontSize="small" sx={{ color: "#350830", mr: 1 }} />
                      <Delete fontSize="small" sx={{ color: "#350830" }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Message Detail Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent sx={{ p: 3, bgcolor: "#fffaf9" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6" fontWeight="bold">
              Message Details
            </Typography>
            <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Stack>

          {selectedMsg && (
            <Stack spacing={2}>
              <TextField label="Full Name" value={selectedMsg.sender_name} fullWidth InputProps={{ readOnly: true }} />
              <TextField label="Email Address" value={selectedMsg.email} fullWidth InputProps={{ readOnly: true }} />
              <TextField label="Phone Number" value={selectedMsg.phone || "—"} fullWidth InputProps={{ readOnly: true }} />
              <TextField
                label="School/Organization Name"
                value={selectedMsg.school?.name || "—"}
                fullWidth
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Message"
                value={selectedMsg.content}
                fullWidth
                multiline
                minRows={3}
                InputProps={{ readOnly: true }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#c62828",
                  borderRadius: 10,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#b71c1c" },
                }}
              >
                Reply
              </Button>
            </Stack>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}







// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   // TableContainer,
//   TableHead,
//   TableRow,
//   Stack,
//   Dialog,
//   DialogContent,
//   TextField,
//   Card,
//   CardContent,
// } from "@mui/material";
// import {
//   Mail,
//   MarkEmailUnread,
//   Reply,
//   AccessTime,
//   Edit,
//   Delete,
//   Visibility,
//   Send,
//   Close,
// } from "@mui/icons-material";

// export default function MessagesManager() {
//   const [filter, setFilter] = useState("All");
//   const [open, setOpen] = useState(false);
//   const [selectedMsg, setSelectedMsg] = useState(null);

//   const stats = [
//     { icon: <Mail color="error" />, label: "Total Messages", value: "250" },
//     { icon: <MarkEmailUnread color="warning" />, label: "Unread Messages", value: "22" },
//     { icon: <Reply color="error" />, label: "Replied Messages", value: "213" },
//     { icon: <AccessTime color="secondary" />, label: "Last Message", value: "3 hrs ago" },
//   ];

//   const messages = [
//     {
//       name: "Grace Akindele",
//       email: "graceakinwale@gmail.com",
//       phone: "Nil",
//       school: "Adekings College, Abuja",
//       message:
//         "Lorem ipsum dolor sit amet consectetur. Felis nulla facilisis metus integer dictum dolor nunc quis aenean.",
//       subject: "Voice Training Workshop",
//       date: "22/05/2025",
//       status: "Read",
//     },
//     {
//       name: "Grace Akindele",
//       email: "graceakinwale@gmail.com",
//       phone: "Nil",
//       school: "Adekings College, Abuja",
//       message:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
//       subject: "Choral Challenge Inquiry",
//       date: "23/05/2025",
//       status: "Unread",
//     },
//     {
//       name: "Grace Akindele",
//       email: "graceakinwale@gmail.com",
//       phone: "Nil",
//       school: "Adekings College, Abuja",
//       message:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
//       subject: "Choral Challenge Inquiry",
//       date: "23/05/2025",
//       status: "Replied",
//     },
//     {
//       name: "Grace Akindele",
//       email: "graceakinwale@gmail.com",
//       phone: "Nil",
//       school: "Adekings College, Abuja",
//       message:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
//       subject: "Choral Challenge Inquiry",
//       date: "23/05/2025",
//       status: "Unread",
//     },
//     {
//       name: "Grace Akindele",
//       email: "graceakinwale@gmail.com",
//       phone: "Nil",
//       school: "Adekings College, Abuja",
//       message:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
//       subject: "Choral Challenge Inquiry",
//       date: "23/05/2025",
//       status: "Unread",
//     },
//   ];

//   const filteredMessages =
//     filter === "All" ? messages : messages.filter((msg) => msg.status === filter);

//   const handleView = (msg) => {
//     setSelectedMsg(msg);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMsg(null);
//   };

//   return (
//     <Box>
//       {/* Header */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
//         <Typography variant="h6" fontWeight="bold">
//           Messages
//         </Typography>
//         <Button
//           variant="outlined"
//           startIcon={<Send />}
//           color="error"
//           sx={{ borderRadius: 5, textTransform: "none" }}
//         >
//           Send Bulk Message
//         </Button>
//       </Box>

//       {/* Summary Cards */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {stats.map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Paper
//               elevation={0}
//               sx={{
//                 width: "216px",
//                 height: "144px",
//                 p: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 border: "1px solid #FFB4AB",
//                 borderRadius: "16px",
//                 bgcolor: "inherit",
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

//       {/* Message Center */}
//       <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//         <CardContent>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         Message Center
//       </Typography>

//       {/* Filter Buttons */}
//       <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//         {["All", "Unread", "Read", "Replied"].map((type) => (
//           <Button
//             key={type}
//             size="small"
//             variant={filter === type ? "contained" : "outlined"}
//             color="error"
//             onClick={() => setFilter(type)}
//             sx={{ borderRadius: 5, textTransform: "none", fontSize: 13, px: 2 }}
//           >
//             {type}
//           </Button>
//         ))}
//       </Stack>

//       {/* Table */}
      
//         <Table>
//           <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//             <TableRow>
//               <TableCell>Sender Name</TableCell>
//               <TableCell>Email Address</TableCell>
//               <TableCell>Subject/Topic</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredMessages.map((msg, index) => (
//               <TableRow key={index}>
//                 <TableCell>{msg.name}</TableCell>
//                 <TableCell>{msg.email}</TableCell>
//                 <TableCell>{msg.subject}</TableCell>
//                 <TableCell>{msg.date}</TableCell>
//                 <TableCell>{msg.status}</TableCell>
//                 <TableCell>
//                   <Visibility
//                     fontSize="small"
//                     sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                     onClick={() => handleView(msg)}
//                   />
//                   <Edit fontSize="small" sx={{ color: "#350830", mr: 1, cursor: "pointer" }} />
//                   <Delete fontSize="small" sx={{ color: "#350830", cursor: "pointer" }} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         </CardContent>
//       </Card>

//       {/* Message Detail Modal */}
//       <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
//         <DialogContent sx={{ p: 3, bgcolor: "#fffaf9" }}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
//             <Typography variant="h6" fontWeight="bold">
//               Message Details
//             </Typography>
//             <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
//           </Stack>

//           {selectedMsg && (
//             <Stack spacing={2}>
//               <TextField label="Full Name" value={selectedMsg.name} fullWidth InputProps={{ readOnly: true }} />
//               <TextField label="Email Address" value={selectedMsg.email} fullWidth InputProps={{ readOnly: true }} />
//               <TextField label="Phone Number" value={selectedMsg.phone} fullWidth InputProps={{ readOnly: true }} />
//               <TextField label="School/Organization Name" value={selectedMsg.school} fullWidth InputProps={{ readOnly: true }} />
//               <TextField
//                 label="Message"
//                 value={selectedMsg.message}
//                 fullWidth
//                 multiline
//                 minRows={3}
//                 InputProps={{ readOnly: true }}
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   mt: 1,
//                   bgcolor: "#c62828",
//                   borderRadius: 10,
//                   textTransform: "none",
//                   "&:hover": { bgcolor: "#b71c1c" },
//                 }}
//               >
//                 Reply
//               </Button>
//             </Stack>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// }
