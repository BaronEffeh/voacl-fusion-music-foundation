import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function GalleryTable({ gallery, onEdit, onDelete }) {
  return (
    <Table>
      <TableHead sx={{ backgroundColor: "#fde0e0" }}>
        <TableRow>
          <TableCell>Thumbnail</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Event</TableCell>
          <TableCell>Caption</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {gallery.map((row, i) => (
          <TableRow key={i}>
            <TableCell>
              {row.url ? (
                <img
                  src={row.url}
                  alt="thumb"
                  style={{ width: 60, height: 40, borderRadius: 6 }}
                />
              ) : (
                "—"
              )}
            </TableCell>
            <TableCell>{row.mediaType}</TableCell>
            <TableCell>{row.event}</TableCell>
            <TableCell>{row.caption}</TableCell>
            <TableCell>
              <Edit
                fontSize="small"
                sx={{ mr: 1, cursor: "pointer" }}
                onClick={() => onEdit(row)}
              />
              <Delete
                fontSize="small"
                sx={{ cursor: "pointer" }}
                onClick={() => onDelete(row)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
