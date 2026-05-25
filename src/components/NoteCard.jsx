import React from "react";

const NoteCard = ({ title, date, preview, isActive, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`relative p-6 cursor-pointer transition-all duration-300 border-b border-gray-100
      ${
        isActive
          ? "bg-white shadow-xl ring-1 ring-black/5 z-10"
          : "bg-[#FDFDFD] hover:bg-white"
      }`}
      >
        {/* Active Indicator Bar */}
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-1 bg-black" />
        )}

        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            {date}
          </p>
          {isActive && <span className="text-black text-xs">★</span>}
        </div>

        <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed font-light">
          {preview}
        </p>
      </div>
    </>
  );
};

export default NoteCard;
