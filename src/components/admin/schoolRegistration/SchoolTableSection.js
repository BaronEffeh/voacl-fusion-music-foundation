import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function SchoolTableSection({ schools }) {
  return (
    <>
      <Card sx={{ overflow: "hidden" }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Choral Challenge List
          </Typography>

          <Table>
            <TableHead sx={{ backgroundColor: "#fde0e0" }}>
              <TableRow>
                <TableCell>School Name</TableCell>
                <TableCell>Email address</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Co-ordinator name</TableCell>
                <TableCell>Payment Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools.map((school, index) => (
                <TableRow key={index}>
                  <TableCell>{school.name}</TableCell>
                  <TableCell>{school.email}</TableCell>
                  <TableCell>{school.state}</TableCell>
                  <TableCell>{school.coordinator}</TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: school.paymentStatus === "Verified" ? "green" : "error.main",
                        fontWeight: "bold",
                      }}
                    >
                      {school.paymentStatus}
                    </Typography>
                  </TableCell>
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
        </CardContent>
      </Card>

      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body2">
          Showing 1 to {schools.length} of {schools.length} entries
        </Typography>
        <Pagination count={1} color="error" size="small" />
      </Box>
    </>
  );
}
