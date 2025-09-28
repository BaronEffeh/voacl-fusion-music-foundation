import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={2}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 2,
          border: "1px solid #ddd",
          maxWidth: 500,
          width: "100%",
          marginTop: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Send Us a Message
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number (Optional)"
            type="tel"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="School/Organization Name (Optional)"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#b71c1c",
              "&:hover": { bgcolor: "#a31414" },
              textTransform: "none",
              borderRadius: 2,
              py: 1.2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;
