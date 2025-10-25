import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function EventListSection({ events }) {
  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Event List
        </Typography>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#fff0f0" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell>{event.location}</TableCell>
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

        <Typography
          variant="caption"
          sx={{ display: "block", mt: 2, color: "#999" }}
        >
          Showing 1 to {events.length} of {events.length} entries
        </Typography>
      </CardContent>
    </Card>
  );
}
