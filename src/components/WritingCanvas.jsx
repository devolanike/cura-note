import React, { useRef } from "react";

const WritingCanvas = ({
  content,
  onNoteChange,
  isSearchActive,
  escapedQuery,
}) => {
  const textareaRef = useRef(null);
  const backdropRef = useRef(null);

  const handleScroll = () => {
    if (textareaRef.current && backdropRef.current) {
      backdropRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const renderHighlightedContent = () => {
    if (!isSearchActive || !escapedQuery) return content;

    try {
      const regex = new RegExp(`(${escapedQuery})`, "gi");
      const parts = content.split(regex);
      return parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-amber-200/70 text-transparent rounded-sm"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      );
    } catch {
      return content;
    }
  };

  return (
    <article className="prose prose-lg max-w-none relative min-h-100">
      {/* Backdrop Layer */}
      <div
        ref={backdropRef}
        className="absolute inset-0 w-full h-full text-xl text-transparent leading-relaxed font-light whitespace-pre-wrap wrap-break-words pointer-events-none overflow-y-auto select-none p-0 border-none outline-none"
        style={{ fontFamily: "inherit" }}
      >
        {renderHighlightedContent()}
      </div>

      {/* Editable Textarea Layer */}
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => onNoteChange(e.target.value)}
        onScroll={handleScroll}
        placeholder="Start writing..."
        className="w-full min-h-100 text-xl text-gray-800 leading-relaxed font-light bg-transparent border-none outline-none resize-none placeholder:italic relative z-10 p-0"
        style={{ fontFamily: "inherit" }}
      />
    </article>
  );
};

export default WritingCanvas;
