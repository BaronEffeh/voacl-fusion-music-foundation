import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import EventStatsSection from "../../components/admin/eventManager/EventStatsSection";
import EventListSection from "../../components/admin/eventManager/EventListSection";

export default function EventManager() {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const API_BASE_URL = "https://vocal-fusion.onrender.com";

  /** Fetch all events */
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/events`);
      setEvents(response.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  /** Handle input */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /** Handle add or update */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const eventDateTime = new Date(`${formData.date}T${formData.time}`).toISOString();

    const payload = {
      title: formData.title,
      type: formData.type,
      description: formData.description,
      location: formData.location,
      date: eventDateTime,
    };

    try {
      if (editingEvent) {
        const response = await axios.put(
          `${API_BASE_URL}/events/${editingEvent.id}`,
          payload
        );
        setEvents((prev) =>
          prev.map((ev) => (ev.id === editingEvent.id ? response.data : ev))
        );
        toast.success("Event updated successfully");
      } else {
        const response = await axios.post(`${API_BASE_URL}/events`, payload);
        setEvents((prev) => [...prev, response.data]);
        toast.success("Event added successfully");
      }

      setOpen(false);
      setEditingEvent(null);
      setFormData({ title: "", type: "", description: "", date: "", time: "", location: "" });
    } catch (error) {
      console.error("Error saving event:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  /** Handle delete */
  const handleDelete = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/events/${id}`);

    setEvents((prev) => prev.filter((ev) => ev.id !== id));
    toast.success("Event deleted successfully");
  } catch (error) {
    console.error("Error deleting event:", error);
    toast.error("Failed to delete event");
  }
};

  // const handleDelete = async (id) => {
  //   if (!window.confirm("Are you sure you want to delete this event?")) return;
  //   try {
  //     await axios.delete(`${API_BASE_URL}/events/${id}`);
  //     setEvents((prev) => prev.filter((ev) => ev.id !== id));
  //     toast.success("Event deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting event:", error);
  //     toast.error("Failed to delete event");
  //   }
  // };

  /** Handle edit */
  const handleEdit = (event) => {
    const eventDate = new Date(event.date);
    setFormData({
      title: event.title,
      type: event.type,
      description: event.description,
      location: event.location,
      date: eventDate.toISOString().split("T")[0],
      time: eventDate.toTimeString().slice(0, 5),
    });
    setEditingEvent(event);
    setOpen(true);
  };

  return (
    <Box sx={{ p: 2 }}>
      <EventStatsSection onAddEventClick={() => setOpen(true)} />

      <EventListSection
        events={events}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      {/* Add/Edit Event Modal */}
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
            {editingEvent ? "Edit Event" : "Add New Event"}
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
          <TextField
            label="Event Description"
            name="description"
            fullWidth
            value={formData.description}
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
            disabled={saving}
            sx={{
              backgroundColor: "#B71C1C",
              color: "#fff",
              borderRadius: "12px",
              textTransform: "none",
              py: 1.5,
              "&:hover": { backgroundColor: "#9A1212" },
            }}
          >
            {saving ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : editingEvent ? (
              "Update Event"
            ) : (
              "Add Event"
            )}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
