import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

function FloatingNotePreview() {
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 md:p-3 lg:p-5 xl:p-6 mt-4 rounded-xl xl:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-none border border-[#e0dcd5] dark:border-zinc-700 w-36 md:w-32 lg:w-48 xl:w-64 transform rotate-3 transition-all duration-300">
      <div className="flex gap-1.5 xl:gap-2 mb-3 xl:mb-4">
        <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-emerald-400" />
      </div>

      <div className="space-y-1.5 xl:space-y-3">
        <div className="h-1.5 xl:h-3 w-3/4 bg-[#2d2a26]/10 dark:bg-white/10 rounded-full" />
        <div className="h-1.5 xl:h-2 w-full bg-[#2d2a26]/5 dark:bg-white/5 rounded-full" />
        <div className="h-1.5 xl:h-2 w-full bg-[#2d2a26]/5 dark:bg-white/5 rounded-full" />
        <div className="h-1.5 xl:h-2 w-1/2 bg-[#2d2a26]/5 dark:bg-white/5 rounded-full" />
      </div>
    </div>
  );
}

export default FloatingNotePreview;
