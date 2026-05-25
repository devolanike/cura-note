import React, { useState } from "react";
import { Share2, Check, MoreVertical, Trash2, RefreshCw } from "lucide-react";

const EditorToolbar = ({
  activeNote,
  activeTab,
  onTriggerDeleteModal,
  onRecoverNote,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShareNote = async () => {
    if (!activeNote) return;
    const shareTitle = activeNote.title || "Untitled Note";
    const shareText = `${shareTitle}\n\n${activeNote.content || ""}\n\n— Composed via Cura Note`;

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText });
      } catch (error) {
        console.log("Sharing cancelled", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Note content copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="w-full h-16 border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 select-none shrink-0">
      {/* Left Segment: Editorial Status Token */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <Check size={10} className="text-emerald-600" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
          {activeTab === "trash" ? "Archived Note" : "Saved locally"}
        </span>
      </div>

      {/* Right Segment: Active Action Deck */}
      <div className="flex items-center gap-2 relative">
        {activeNote && activeTab !== "trash" && (
          <button
            onClick={handleShareNote}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-sans font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all active:scale-95"
          >
            <Share2 size={14} className="text-gray-400" />
            <span className="hidden sm:inline">Share</span>
          </button>
        )}

        {/* Three-Dot Menu Button Trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-xl transition-colors relative z-50 ${isMenuOpen ? "bg-gray-100 text-gray-800" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"}`}
        >
          <MoreVertical size={16} />
        </button>

        {/* Floating Dropdown Frame */}
        {isMenuOpen && activeNote && (
          <>
            <div
              className="fixed inset-0 w-screen h-screen bg-transparent z-40 top-0 left-0"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              {activeTab === "trash" ? (
                // If viewing trash, show Recover Note
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onRecoverNote(activeNote.id);
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-sans text-left text-emerald-600 hover:bg-emerald-50/60 transition-colors font-medium"
                >
                  <RefreshCw size={14} className="text-emerald-500" />
                  <span>Recover Note</span>
                </button>
              ) : (
                // If viewing regular workspace, show Move to Trash
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onTriggerDeleteModal();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-sans text-left text-red-600 hover:bg-red-50/60 transition-colors font-medium"
                >
                  <Trash2 size={14} className="text-red-500" />
                  <span>Move to Trash</span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditorToolbar;
