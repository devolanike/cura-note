import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { Type, TrendingUp, Sliders } from "lucide-react";

const pillars = [
  {
    icon: Type,
    title: "Typographic Usability",
    desc: "A writing environment tuned for clarity. We use clean, modern typography to help you write longer without eye strain.",
    tag: "Optimized for Focus",
  },
  {
    icon: TrendingUp,
    title: "Instant Sync",
    desc: "Your notes are saved the moment you type. Reliable, real-time syncing ensures your work is always available where you need it.",
    tag: "Always Up-to-Date",
  },
  {
    icon: Sliders,
    title: "Distraction Isolation",
    desc: "A clean, quiet space to write. No unnecessary buttons or notifications—just you and your ideas.",
    tag: "Built for Flow",
  },
];

function CorePillars() {
  return (
    <section className="bg-[#fcfaf7] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-4xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a8a29e] dark:text-zinc-600">
            System Pillars &bull; Cura Framework
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-[#2d2a26] dark:text-white tracking-tighter mt-4 uppercase leading-[0.85] italic">
            Built for focused execution.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-8 rounded-3xl border border-[#e0dcd5] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#f0ece7] flex items-center justify-center mb-8 border border-[#e0dcd5]">
                  <pillar.icon className="w-6 h-6 text-[#2d2a26]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#2d2a26] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5c5954] font-medium leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                <span className="inline-block text-[10px] font-black tracking-widest uppercase text-[#a8a29e] border-t border-[#e0dcd5] pt-4">
                  {pillar.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
export default CorePillars;
