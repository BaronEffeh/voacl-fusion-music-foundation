import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  Card,
  CardContent,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function SchoolRegistration() {
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const schools = [
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      proofOfPayment: "Unverified",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      proofOfPayment: "Verified",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      proofOfPayment: "Verified",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      proofOfPayment: "Unverified",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      proofOfPayment: "Verified",
    },
  ];

  const handleFilter = () => {
    console.log("Filters:", { event, status, search });
  };

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        School Registration
      </Typography>

      {/* Filter Section */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Event
            </Typography>
            <Select
              fullWidth
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              displayEmpty
              sx={{ borderRadius: 2, width: "175px", height: "40px" }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="choral">Choral Challenge</MenuItem>
              <MenuItem value="solo">Solo Contest</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Payment Status
            </Typography>
            <Select
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              displayEmpty
              sx={{ borderRadius: 2, width: "175px", height: "40px" }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="verified">Verified</MenuItem>
              <MenuItem value="unverified">Unverified</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Keyword Search
            </Typography>
            <TextField
              placeholder="Search"
              variant="outlined"
              fullWidth
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={2} md={2}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleFilter}
              fullWidth
              sx={{
                mt: { xs: 2, sm: 3.4 },
                borderRadius: 5,
                textTransform: "none",
              }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Table Section */}
      <Card sx={{ overflow: "hidden" }}>
        <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                Choral Challenge List
            </Typography>

            {/* <TableContainer component={Paper} sx={{ borderRadius: 2 }}> */}
                <Table>
                <TableHead sx={{ backgroundColor: "#fde0e0" }}>
                    <TableRow>
                    <TableCell>School Name</TableCell>
                    <TableCell>Email address</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Co-ordinator name</TableCell>
                    <TableCell>Payment Status</TableCell>
                    <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schools.map((school, index) => (
                    <TableRow key={index}>
                        <TableCell>{school.name}</TableCell>
                        <TableCell>{school.email}</TableCell>
                        <TableCell>{school.state}</TableCell>
                        <TableCell>{school.coordinator}</TableCell>
                        <TableCell>
                        <Typography
                            sx={{
                            color:
                                school.proofOfPayment === "Verified"
                                ? "green"
                                : "error.main",
                            fontWeight: "bold",
                            }}
                        >
                            {school.proofOfPayment}
                        </Typography>
                        </TableCell>
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
            {/* </TableContainer> */}
        </CardContent>
      </Card>

      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body2">
          Showing 1 to {schools.length} of {schools.length} entries
        </Typography>
        <Pagination count={1} color="error" size="small" />
      </Box>
    </Box>
  );
}
