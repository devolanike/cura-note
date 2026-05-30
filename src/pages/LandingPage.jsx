import React from "react";
import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Sections/Hero";
import InteractiveWorkspace from "../components/Sections/InteractiveWorkspace";
import CorePillars from "../components/Sections/CorePillars";
import PhilosophyComparison from "../components/Sections/PhilosophyComparison";
import Footer from "../components/Sections/Footer";
import MagicBento from "../components/Sections/MagicBento";
import Dashboard from "@/components/Sections/DashboardPreview";

export default function LandingPage() {
  return (
    <div className="bg-[#e7e7e5] min-h-screen text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <InteractiveWorkspace />
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
        <PhilosophyComparison />
        <CorePillars />
        <Footer />
      </main>
    </div>
  );
}
