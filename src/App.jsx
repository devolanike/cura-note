import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { LandingProvider } from "./context/LandingContext";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"; // Ensure you import your Login page
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute"; // Your new security component

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <LandingProvider>
              <LandingPage />
            </LandingProvider>
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
