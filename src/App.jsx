import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { LandingProvider } from "./context/LandingContext"; // Import your provider
import LandingPage from "./pages/LandingPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingProvider>
            <LandingPage />
          </LandingProvider>
        }
      />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
