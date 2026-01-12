import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";

export default function MessagesStats({ stats }) {
  return (
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
  );
}
