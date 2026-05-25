import React, { useState } from "react";
import { Search, ChevronDown, FileText, Star, Trash2 } from "lucide-react";
import NoteCard from "./NoteCard";

const NoteList = ({
  notes,
  activeNoteId,
  onSelectNote,
  sidebarSearchQuery,
  onSidebarSearchChange,
  activeTab,
  onTabChange,
}) => {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);

  const tabLabels = {
    all: "All Notes",
    favorites: "Favorites",
    trash: "Trash",
  };

  const handleTabSelect = (tabId) => {
    onTabChange(tabId);
    setIsWorkspaceOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full lg:w-96 border-r border-gray-200 flex flex-col h-screen bg-[#FDFDFD]">
      {/* Header Context */}
      <div className="p-6 bg-[#FDFDFD] relative z-30">
        {/* MOBILE-ONLY USER PROFILE BANNER WITH DROPDOWN */}
        <div className="flex items-center justify-between mb-6 md:hidden border-b border-gray-100/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-serif text-sm tracking-wider font-semibold shadow-inner">
              NT
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                Account Workspace
              </p>
              <h4 className="text-sm font-sans font-bold text-gray-800">
                NippyTech
              </h4>
            </div>
          </div>

          {/* WORKSPACE SELECTOR DROPDOWN BUTTON */}
          <div className="relative">
            <button
              onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-medium bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100 transition-colors active:scale-95"
            >
              <span>{tabLabels[activeTab || "all"]}</span>
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform duration-200 ${isWorkspaceOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu Overlay */}
            {isWorkspaceOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleTabSelect("all")}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-left font-sans transition-colors ${activeTab === "all" ? "bg-neutral-950 text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <FileText size={14} />
                  <span>All Notes</span>
                </button>
                <button
                  onClick={() => handleTabSelect("favorites")}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-left font-sans transition-colors ${activeTab === "favorites" ? "bg-neutral-950 text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <Star size={14} />
                  <span>Favorites</span>
                </button>
                <button
                  onClick={() => handleTabSelect("trash")}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-left font-sans transition-colors ${activeTab === "trash" ? "bg-neutral-950 text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <Trash2 size={14} />
                  <span>Trash</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Standard Desktop Title Headers */}
        <h2 className="text-2xl font-sans font-bold mb-4 text-gray-900 tracking-tight hidden md:block">
          Cura Note
        </h2>
        <h2 className="text-xl font-serif font-bold mb-3 text-gray-900 tracking-tight md:hidden">
          Notes
        </h2>

        {/* Search Input Bar Wrapper */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200/60 rounded-xl focus-within:border-gray-400 transition-all">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={sidebarSearchQuery || ""}
            onChange={(e) => onSidebarSearchChange(e.target.value)}
            placeholder="Search notes..."
            className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder:text-gray-400 font-sans"
          />
        </div>
      </div>

      {/* Note Cards Render Viewport */}
      <div className="flex-1 overflow-y-auto pb-28">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              date={note.date}
              preview={note.content}
              isActive={activeNoteId === note.id}
              onClick={() => onSelectNote(note.id)}
            />
          ))
        ) : (
          <div className="p-12 text-center text-sm text-gray-400 font-light italic">
            No matching notes found in {tabLabels[activeTab || "all"]}.
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
