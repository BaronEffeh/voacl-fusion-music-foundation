import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

export default function SchoolRegistration() {
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://vocal-fusion.onrender.com";

  /** Fetch schools */
  const fetchSchools = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/schools?page=${page}&limit=10`
      );

      const data = response.data.schools || response.data;

      const mapped = data.map((s) => ({
        id: s.id,
        name: s.name,
        email: s.email,
        state: s.state,
        choirCoordinator: s.choirCoordinator,
        proofOfPayment: s.proofOfPayment || "Unverified",
        fullData: s,
      }));

      setSchools(mapped);
      setFilteredSchools(mapped);

      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching schools:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchools(page);
  }, [page]);

  /** Filter */
  const handleFilter = useCallback(() => {
  let filtered = [...schools];

  if (status) {
    filtered = filtered.filter(
      (s) => s.proofOfPayment.toLowerCase() === status.toLowerCase()
    );
  }

  if (search.trim()) {
    const keyword = search.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(keyword) ||
        s.email.toLowerCase().includes(keyword) ||
        s.state.toLowerCase().includes(keyword) ||
        (s.choirCoordinator || "").toLowerCase().includes(keyword)
    );
  }

  setFilteredSchools(filtered);
}, [schools, status, search]);

  useEffect(() => {
  handleFilter();
}, [handleFilter]);

  /** DELETE school */
  const handleDeleteSchool = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/schools/${id}`);
      fetchSchools(page);
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error);
    }
  };

  /** UPDATE PAYMENT STATUS */
  const handleTogglePayment = async (school) => {
  try {
    await axios.patch(`${API_BASE_URL}/schools/${school.id}`, {
      proofOfPayment: school.proofOfPayment,
    });

    fetchSchools(page);
  } catch (error) {
    console.error("Payment update failed:", error.response?.data || error);
  }
};

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        School Registration
      </Typography>

      <SchoolFilterSection
        event={event}
        status={status}
        search={search}
        setEvent={setEvent}
        setStatus={setStatus}
        setSearch={setSearch}
        handleFilter={handleFilter}
      />

      <SchoolTableSection
        schools={filteredSchools}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        onDelete={handleDeleteSchool}
        onTogglePayment={handleTogglePayment}
        loading={loading}
      />
    </Box>
  );
}
