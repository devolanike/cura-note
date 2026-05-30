import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

const comparisonData = [
  {
    feature: "Workspace",
    cura: "Clean and distraction-free",
    others: "Cluttered and overwhelming",
  },
  {
    feature: "Organization",
    cura: "Structured folders and categories",
    others: "Notes scattered everywhere",
  },
  {
    feature: "Privacy",
    cura: "Secure and private by default",
    others: "Tracking and analytics enabled",
  },
  {
    feature: "Auto Save",
    cura: "Automatic saving in real time",
    others: "Manual saving or delayed sync",
  },
  {
    feature: "Search",
    cura: "Instantly find what matters",
    others: "Time-consuming navigation",
  },
  {
    feature: "Design",
    cura: "Modern and focused",
    others: "Generic and outdated",
  },
];

function PhilosophyComparison() {
  return (
    <section className="bg-[#fcfaf7] py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-[#2d2a26] tracking-tighter uppercase leading-none">
            Architectural <br /> Integrity
          </h2>
          <p className="mt-4 text-[#75716a] max-w-md mx-auto text-sm tracking-wide uppercase font-medium">
            Your ideas deserve a better home
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="flex flex-col border-t border-[#2d2a26]">
          {/* Table Header Row Hidden on Mobile for clean stack view */}
          <div className="hidden md:grid grid-cols-12 gap-6 py-5 border-b border-[#e0dcd5] text-[11px] font-bold uppercase tracking-widest text-[#75716a]">
            <div className="col-span-4">Core Focus</div>
            <div className="col-span-4 text-[#0f5132]">
              Cura Note Architecture
            </div>
            <div className="col-span-4 pl-4">Legacy Platforms</div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 border-b border-[#e0dcd5] items-baseline group"
            >
              {/* Feature Title */}
              <div className="col-span-1 md:col-span-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#2d2a26]">
                  {item.feature}
                </h4>
              </div>

              {/* Cura Platform column */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-start">
                <span className="inline-block md:hidden text-[9px] font-bold uppercase tracking-wider text-[#0f5132] mb-1">
                  Cura Note
                </span>
                <p className="text-base font-medium text-[#2d2a26] md:pr-4">
                  {item.cura}
                </p>
              </div>

              {/* Competitor alternatives column */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-start md:pl-4 border-l-0 md:border-l md:border-[#e8e4dc]">
                <span className="inline-block md:hidden text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1 mt-1">
                  Legacy Systems
                </span>
                <p className="text-sm font-normal text-[#6b6760] leading-relaxed">
                  {item.others}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhilosophyComparison;
