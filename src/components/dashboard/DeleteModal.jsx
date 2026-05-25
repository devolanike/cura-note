import React from "react";
import { Trash2 } from "lucide-react";

const DeleteModal = ({ isOpen, noteTitle, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Backdrop Blurring */}
      <div
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onCancel}
      />

      {/* Content Container Box */}
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative z-10 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Identity Header Context */}
        <div className="flex items-center gap-3.5 mb-5 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <Trash2 size={18} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-base font-sans font-bold text-gray-900 tracking-tight">
              Move to Trash?
            </h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-0.5">
              Manuscript Status Change
            </p>
          </div>
        </div>

        {/* Description Segment */}
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
          Are you sure you want to discard{" "}
          <span className="font-semibold text-gray-900">
            “{noteTitle || "Untitled Manuscript"}”
          </span>
          ? It will be moved to the Trash workspace section.
        </p>

        {/* Mobile-Friendly Interactive Deck */}
        <div className="flex flex-col gap-2 sm:flex-row-reverse">
          <button
            onClick={onConfirm}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-sans font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors active:scale-[0.98]"
          >
            Confirm Delete
          </button>
          <button
            onClick={onCancel}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-sans font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
