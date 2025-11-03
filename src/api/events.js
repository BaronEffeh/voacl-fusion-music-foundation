import api from "./apiClient";

// Get all events
export const getEvents = async () => {
  const res = await api.get("/events");
  return res.data;
};

// Create event
export const createEvent = async (data) => {
  const res = await api.post("/events", data);
  return res.data;
};

// Delete event
export const deleteEvent = async (id) => {
  const res = await api.delete(`/events/${id}`);
  return res.data;
};
