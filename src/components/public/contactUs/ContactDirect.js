import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const ContactDirect = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        bgcolor: "#EFDEE6",
        marginTop: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Prefer to reach us directly?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        You can send an email or call us using the details below:
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <Typography> Email: <a href="mailto:hello@vocalfusion.org.ng">hello@vocalfusion.org.ng</a></Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <Typography> Phone: <a href="tel:+2341112223334">+234 111 222 3334</a></Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDirect;
