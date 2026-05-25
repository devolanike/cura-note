import React from "react";
import { ArrowLeft } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import TitleHeader from "./TitleHeader";
import WritingCanvas from "./WritingCanvas";
import CuraSummary from "./CuraSummary";

const EditorMain = ({
  activeNote,
  onNoteChange,
  onTitleChange,
  onSummarizeNote,
  onClearSummary,
  isSearchActive,
  setIsSearchActive,
  searchQuery,
  setSearchQuery,
  isMobileEditorOpen,
  onCloseMobileEditor,
}) => {
  if (!activeNote) {
    return (
      <div className="p-12 text-gray-400 font-light h-full flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Select a note to begin...</p>
          <button
            onClick={onCloseMobileEditor}
            className="md:hidden text-xs text-gray-800 border border-gray-200 px-4 py-2 rounded-xl"
          >
            Back to Notes
          </button>
        </div>
      </div>
    );
  }

  const getEscapedQuery = () => {
    if (!searchQuery) return null;
    return searchQuery.replace(/[-/\\^$*+?.()|[\]{}:]/g, "\\$&");
  };

  const escapedQuery = getEscapedQuery();

  const getMatchCount = () => {
    if (!isSearchActive || !escapedQuery || !activeNote.content) return 0;
    try {
      const regex = new RegExp(escapedQuery, "gi");
      const matches = activeNote.content.match(regex);
      return matches ? matches.length : 0;
    } catch {
      return 0;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 md:py-16 px-6 sm:px-12 lg:px-20 relative">
      {/* Mobile-Only Back Nav Button */}
      {isMobileEditorOpen && (
        <button
          onClick={onCloseMobileEditor}
          className="md:hidden flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6 font-sans bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl w-fit"
        >
          <ArrowLeft size={16} />
          <span>Notes</span>
        </button>
      )}

      <CuraSummary summary={activeNote.summary} onClear={onClearSummary} />

      {isSearchActive && (
        <SearchOverlay
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          matchCount={getMatchCount()}
          onClose={() => {
            setSearchQuery("");
            setIsSearchActive(false);
          }}
        />
      )}

      <TitleHeader
        title={activeNote.title}
        onTitleChange={onTitleChange}
        onSummarizeNote={onSummarizeNote}
        summary={activeNote.summary}
      />

      <WritingCanvas
        content={activeNote.content}
        onNoteChange={onNoteChange}
        isSearchActive={isSearchActive}
        escapedQuery={escapedQuery}
      />
    </div>
  );
};

export default EditorMain;
