import React from "react";
import { Search, X } from "lucide-react";

const SearchOverlay = ({
  searchQuery,
  setSearchQuery,
  matchCount,
  onClose,
}) => {
  return (
    <div className="mb-6 flex items-center justify-between bg-gray-50 border border-gray-200/60 p-3 rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center gap-3 flex-1">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search words in note..."
          className="bg-transparent border-none outline-none text-sm text-gray-800 w-full font-sans"
          autoFocus
        />
      </div>
      <div className="flex items-center gap-4">
        {searchQuery && (
          <span className="text-xs font-mono text-gray-400 bg-gray-200/50 px-2 py-0.5 rounded-md">
            {matchCount} {matchCount === 1 ? "match" : "matches"}
          </span>
        )}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
