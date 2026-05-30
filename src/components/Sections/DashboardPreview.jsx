import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import Folder from "../ui/Folder";
import CountUp from "../ui/CountUp";
import FloatingNotePreview from "../ui/FloatingNotePreview";
import ThemeToggle from "../ui/ThemeToggle";

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    // UPDATED: Dynamic padding to save space on tablets (md:p-5)
    className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-5 lg:p-8 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

function CuraDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-8 lg:p-16 transition-colors duration-300">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-400">
            Workspace
          </h2>
          <h1 className="text-4xl font-semibold text-zinc-900 dark:text-white mt-1">
            Dashboard Preview
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Stats Section */}
        <GlassCard className="md:col-span-1 flex flex-col justify-between overflow-hidden">
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Active Projects
            </p>
            <div className="text-5xl font-bold text-zinc-900 dark:text-white mt-2">
              <CountUp from={0} to={3} duration={2} />
            </div>
          </div>
          {/* UPDATED: Removed scale-75, letting the responsive component fit naturally */}
          <div className="mt-8 flex justify-center md:justify-start origin-bottom-left">
            <FloatingNotePreview />
          </div>
        </GlassCard>

        {/* Task Board */}
        <GlassCard className="md:col-span-3">
          <div className="mb-8">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Task Status
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">
              Group and manage your files seamlessly across distinct categories
              to maintain an organized workflow.
            </p>
          </div>

          <div className="flex justify-around items-end pb-4 lg:pb-8">
            {["To Do", "In Progress", "Done"].map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-4">
                <Folder
                  color={["#A1A1AA", "#71717A", "#27272A"][i]}
                  size={1.2}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Adaptive Interface / Dark Mode Feature */}
        <GlassCard className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-8">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Adaptive Interface
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
              Cura responds perfectly to your environment. Seamlessly switch
              between light and dark modes to reduce eye strain and maintain
              focus, whether you are planning your day in the sun or working
              late into the night.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-zinc-100/50 dark:bg-zinc-800/50 p-2 pr-6 rounded-full border border-zinc-200 dark:border-zinc-700/50 shrink-0">
            <ThemeToggle />
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              Try It Out
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default CuraDashboard;
