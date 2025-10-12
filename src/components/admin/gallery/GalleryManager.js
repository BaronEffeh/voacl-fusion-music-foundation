import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Image,
  Link as LinkIcon,
  Visibility,
  Collections,
  Edit,
  Delete,
  Add,
} from "@mui/icons-material";

export default function GalleryManager() {
  const stats = [
    { icon: <Image color="error" />, label: "Images Uploaded", value: "2500" },
    { icon: <LinkIcon color="warning" />, label: "Video Links", value: "22" },
    { icon: <Visibility color="error" />, label: "Views", value: "8,245" },
    { icon: <Collections color="secondary" />, label: "Gallery Collections", value: "3" },
  ];

  const galleryData = [
    {
      thumbnail: "/images/sample1.jpg",
      type: "Image",
      eventTag: "Voice Training Workshop",
      caption: "VFMF Trainer II",
    },
    {
      thumbnail: "/images/sample2.jpg",
      type: "Video",
      eventTag: "Choral Challenge",
      caption: "Choral Challenge 3.0",
    },
    {
      thumbnail: "/images/sample3.jpg",
      type: "Image",
      eventTag: "Winners Concert",
      caption: "Winners Concert A3",
    },
    {
      thumbnail: "/images/sample4.jpg",
      type: "Image",
      eventTag: "Voice Training Workshop",
      caption: "VFMF - Trainer I",
    },
  ];

  const videoLinks = [
    "youtube.com/xxxyyyzzz",
    "youtube.com/xxxyyyzzz",
    "youtube.com/xxxyyyzzz",
  ];

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Gallery Manager
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          color="error"
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Upload Media
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

      {/* Gallery Table */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Gallery Information
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#fde0e0" }}>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Event Tag</TableCell>
              <TableCell>Caption</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {galleryData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={row.thumbnail}
                    alt="thumb"
                    style={{
                      width: 60,
                      height: 40,
                      borderRadius: 6,
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.eventTag}</TableCell>
                <TableCell>{row.caption}</TableCell>
                <TableCell>
                  <Edit
                    fontSize="small"
                    sx={{ color: "#c62828", mr: 1, cursor: "pointer" }}
                  />
                  <Delete
                    fontSize="small"
                    sx={{ color: "#555", cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Collections & Video Links */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Gallery Collections
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {galleryData.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.thumbnail}
                alt="collection"
                sx={{
                  width: 100,
                  height: 70,
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 1,
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Video Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {videoLinks.map((link, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{ color: "primary.main", cursor: "pointer" }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
