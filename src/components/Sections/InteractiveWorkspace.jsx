import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line
import { BrainCircuit, KeyRound, Trash2 } from "lucide-react";
import { useLanding } from "../../context/LandingContext";
import { FeatureSummary, FeatureJwt, FeatureTrash } from "./WorkspaceFeatures";

function InteractiveWorkspace() {
  const { activeFeature, setActiveFeature } = useLanding();

  const tabs = [
    { id: "summary", label: "Cura Summary", icon: BrainCircuit },
    { id: "jwt", label: "Secure JWT Auth", icon: KeyRound },
    { id: "trash", label: "Delete & Recover", icon: Trash2 },
  ];

  return (
    <section
      id="editor-interactive"
      className="w-full mx-auto px-4 py-12 md:px-6 md:py-20"
    >
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-wrap justify-center items-center gap-2 p-1 bg-[#f0ece7] rounded-full w-full max-w-sm md:w-fit mx-auto border border-[#e0dcd5]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFeature(tab.id)}
              className={`relative px-4 py-2.5 text-[9px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 rounded-full ${
                activeFeature === tab.id
                  ? "text-[#2d2a26]"
                  : "text-[#5c5954] hover:text-[#2d2a26]"
              }`}
            >
              {activeFeature === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-md"
                />
              )}
              <tab.icon className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10">{`0${tabs.indexOf(tab) + 1}. ${tab.label}`}</span>
            </button>
          ))}
        </div>

        <div className="w-full rounded-[2rem] bg-white/70 backdrop-blur-xl p-8 sm:p-14 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] text-left flex flex-col min-h-112.5 justify-start relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              {activeFeature === "summary" && <FeatureSummary />}
              {activeFeature === "jwt" && <FeatureJwt />}
              {activeFeature === "trash" && <FeatureTrash />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default InteractiveWorkspace;
