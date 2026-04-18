import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const isAuthenticated = localStorage.getItem("adminAuth") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
}