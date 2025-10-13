import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  // TableContainer,
  TableHead,
  TableRow,
  Stack,
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardContent,
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

export default function MessagesManager() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const stats = [
    { icon: <Mail color="error" />, label: "Total Messages", value: "250" },
    { icon: <MarkEmailUnread color="warning" />, label: "Unread Messages", value: "22" },
    { icon: <Reply color="error" />, label: "Replied Messages", value: "213" },
    { icon: <AccessTime color="secondary" />, label: "Last Message", value: "3 hrs ago" },
  ];

  const messages = [
    {
      name: "Grace Akindele",
      email: "graceakinwale@gmail.com",
      phone: "Nil",
      school: "Adekings College, Abuja",
      message:
        "Lorem ipsum dolor sit amet consectetur. Felis nulla facilisis metus integer dictum dolor nunc quis aenean.",
      subject: "Voice Training Workshop",
      date: "22/05/2025",
      status: "Read",
    },
    {
      name: "Grace Akindele",
      email: "graceakinwale@gmail.com",
      phone: "Nil",
      school: "Adekings College, Abuja",
      message:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
      subject: "Choral Challenge Inquiry",
      date: "23/05/2025",
      status: "Unread",
    },
    {
      name: "Grace Akindele",
      email: "graceakinwale@gmail.com",
      phone: "Nil",
      school: "Adekings College, Abuja",
      message:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
      subject: "Choral Challenge Inquiry",
      date: "23/05/2025",
      status: "Replied",
    },
    {
      name: "Grace Akindele",
      email: "graceakinwale@gmail.com",
      phone: "Nil",
      school: "Adekings College, Abuja",
      message:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
      subject: "Choral Challenge Inquiry",
      date: "23/05/2025",
      status: "Unread",
    },
    {
      name: "Grace Akindele",
      email: "graceakinwale@gmail.com",
      phone: "Nil",
      school: "Adekings College, Abuja",
      message:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin at nisl leo. Cras volutpat dictum tincidunt.",
      subject: "Choral Challenge Inquiry",
      date: "23/05/2025",
      status: "Unread",
    },
  ];

  const filteredMessages =
    filter === "All" ? messages : messages.filter((msg) => msg.status === filter);

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
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: 2,
                bgcolor: "#fff",
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
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Message Center
      </Typography>

      {/* Filter Buttons */}
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

      {/* Table */}
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent>
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
            {filteredMessages.map((msg, index) => (
              <TableRow key={index}>
                <TableCell>{msg.name}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.subject}</TableCell>
                <TableCell>{msg.date}</TableCell>
                <TableCell>{msg.status}</TableCell>
                <TableCell>
                  <Visibility
                    fontSize="small"
                    sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
                    onClick={() => handleView(msg)}
                  />
                  <Edit fontSize="small" sx={{ color: "#350830", mr: 1, cursor: "pointer" }} />
                  <Delete fontSize="small" sx={{ color: "#350830", cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
              <TextField label="Full Name" value={selectedMsg.name} fullWidth InputProps={{ readOnly: true }} />
              <TextField label="Email Address" value={selectedMsg.email} fullWidth InputProps={{ readOnly: true }} />
              <TextField label="Phone Number" value={selectedMsg.phone} fullWidth InputProps={{ readOnly: true }} />
              <TextField label="School/Organization Name" value={selectedMsg.school} fullWidth InputProps={{ readOnly: true }} />
              <TextField
                label="Message"
                value={selectedMsg.message}
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
