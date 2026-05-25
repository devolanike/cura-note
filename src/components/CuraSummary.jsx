import React from "react";
import { Sparkles, X } from "lucide-react";

const CuraSummary = ({ summary, onClear }) => {
  if (!summary) return null;

  return (
    <div className="mx-6 sm:mx-12 mt-4 p-4 bg-neutral-50 border border-neutral-100 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-200 relative group">
      <div className="flex gap-2.5 items-start pr-6">
        <Sparkles size={14} className="text-neutral-800 shrink-0 mt-0.5" />
        <p className="text-xs font-sans font-normal leading-relaxed text-neutral-700 tracking-wide">
          {summary}
        </p>
      </div>

      {onClear && (
        <button
          onClick={onClear}
          className="absolute right-3 top-3 text-neutral-300 hover:text-neutral-500  p-0.5 rounded-md hover:bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          title="Clear Summary"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};

export default CuraSummary;
