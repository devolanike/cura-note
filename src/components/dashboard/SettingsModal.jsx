import React from "react";
import { X, Sliders, Monitor, HelpCircle } from "lucide-react";

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-100 animate-in fade-in duration-200">
      {/* Modal Box */}
      <div className="bg-white border border-gray-100 rounded-3xl w-full max-w-md p-8 shadow-2xl scale-in-center animate-in zoom-in-95 duration-200 mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Sliders size={18} className="text-gray-900" />
            <h3 className="text-lg font-sans font-bold text-gray-900 uppercase tracking-wider">
              Preferences
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-50 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Settings Groups */}
        <div className="space-y-6">
          {/* Typography Control */}
          <div className="space-y-2">
            <label className="text-xs font-sans font-semibold uppercase tracking-widest text-gray-400">
              Typography Scale
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Classic Serif", "Modern Sans", "Mono Space"].map(
                (font, idx) => (
                  <button
                    key={idx}
                    className={`py-2 px-3 text-xs rounded-xl border text-center transition-all ${
                      idx === 0
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {font}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Core Configuration Options */}
          <div className="border-t border-gray-100 pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Monitor size={16} className="text-gray-400" />
                <span className="text-sm font-light text-gray-700">
                  Focus Typing Mode
                </span>
              </div>
              <input
                type="checkbox"
                className="accent-black h-4 w-4 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle size={16} className="text-gray-400" />
                <span className="text-sm font-light text-gray-700">
                  Markdown Shortcuts
                </span>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="accent-black h-4 w-4 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer Save Button */}
        <button
          onClick={onClose}
          className="w-full mt-8 py-3 bg-black text-white rounded-xl text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          Save Configurations
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
