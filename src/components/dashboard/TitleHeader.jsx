import React, { useRef, useEffect } from "react";
import { Wand2 } from "lucide-react";

const TitleHeader = ({ title, onTitleChange, onSummarizeNote }) => {
  const titleRef = useRef(null);

  // Sync title text node only when selecting a completely different note card
  useEffect(() => {
    if (titleRef.current) {
      if (titleRef.current.textContent !== title) {
        titleRef.current.textContent = title;
      }
    }
  }, [title]);

  const handleInput = (e) => {
    const target = e.currentTarget;
    let text = target.textContent;

    if (text.trim() === "") {
      target.innerHTML = "";
      text = "";
    }
    onTitleChange(text);
  };

  return (
    <div className="mb-12">
      <h1
        ref={titleRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder="Untitled Note"
        className="w-full text-5xl font-serif font-bold text-gray-900 leading-tight mb-8 outline-none border-none min-h-[1em] relative
          empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:font-sans empty:before:font-light empty:before:text-4xl empty:before:absolute empty:before:left-0 empty:before:pointer-events-none"
      />

      <button
        onClick={onSummarizeNote}
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-xs uppercase tracking-widest hover:bg-gray-800 active:scale-95 transition-all mb-8 shadow-lg"
      >
        <Wand2 size={14} />
        Cura Summary
      </button>
    </div>
  );
};

export default TitleHeader;
