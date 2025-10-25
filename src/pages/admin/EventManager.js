import React, { useState } from "react";
import { Box, Modal, Typography, TextField, Button, Grid } from "@mui/material";
import EventStatsSection from "../../components/admin/eventManager/EventStatsSection";
import EventListSection from "../../components/admin/eventManager/EventListSection";

const events = [
  {
    title: "Voice Training Workshop",
    type: "Workshop",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Choral Challenge",
    type: "Competition",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
  {
    title: "Winners Concert",
    type: "Concert",
    date: "Sept 12, 2025",
    time: "2:00pm",
    location: "Transcorp Hilton, Abuja",
  },
];

export default function EventManager() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Added:", formData);
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <EventStatsSection onAddEventClick={() => setOpen(true)} />
      <EventListSection events={events} />

      {/* Add Event Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            p: 4,
            borderRadius: "12px",
            boxShadow: 24,
            width: 380,
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Add New Event
          </Typography>

          <TextField
            label="Event Title"
            name="title"
            fullWidth
            value={formData.title}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Event Type"
            name="type"
            fullWidth
            value={formData.type}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <TextField
                label="Date"
                name="date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Time"
                name="time"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <TextField
            label="Location"
            name="location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#B71C1C",
              color: "#fff",
              borderRadius: "12px",
              textTransform: "none",
              py: 1.5,
              "&:hover": { backgroundColor: "#9A1212" },
            }}
          >
            Add Event
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}






// import React from "react";
// import { Box, Typography } from "@mui/material";
// import EventStatsSection from "../../components/admin/eventManager/EventStatsSection";
// import EventListSection from "../../components/admin/eventManager/EventListSection";
// // import EventManager from "../../components/admin/eventManager/EventManager";

// const EventsPage = () => {
//     return (
//         <Box sx={{ p: 2 }}>
//       <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
//         Event Manager
//       </Typography>

//       {/* Event Stats */}
//       <EventStatsSection />

//       {/* Event List + Modal */}
//       <EventListSection />
//     </Box>
//         // <Box>
//         //     <EventManager />
//         // </Box>
//     )
// }

// export default EventsPage;