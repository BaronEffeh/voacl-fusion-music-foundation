import React from "react";
import { Dialog, Box, Typography, Button } from "@mui/material";

export default function ConfirmDeleteModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Delete?
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onClose}
            sx={{
              borderRadius: 5,
              borderColor: "#c62828",
              color: "#c62828",
              textTransform: "none",
              py: 1.5,
              fontSize: 16,
            }}
          >
            No
          </Button>

          <Button
            fullWidth
            variant="contained"
            onClick={onConfirm}
            sx={{
              borderRadius: 5,
              bgcolor: "#c62828",
              textTransform: "none",
              py: 1.5,
              fontSize: 16,
              "&:hover": { bgcolor: "#b71c1c" },
            }}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
