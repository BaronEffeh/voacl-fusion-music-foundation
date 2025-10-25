import React from "react";
import { Grid, Typography, Select, MenuItem, TextField, Button, Paper } from "@mui/material";

export default function SchoolFilterSection({ event, status, search, setEvent, setStatus, setSearch, handleFilter }) {
  return (
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
        {/* Event */}
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

        {/* Payment Status */}
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

        {/* Search */}
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

        {/* Filter Button */}
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
  );
}
