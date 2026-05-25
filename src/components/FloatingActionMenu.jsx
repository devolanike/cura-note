import React, { useState } from "react";
import { Plus, Search, Settings } from "lucide-react";

const FloatingActionMenu = ({
  onCreateNote,
  isSearchActive,
  setIsSearchActive,
  isSettingsOpen,
  setIsSettingsOpen,
}) => {
  const [localAction, setLocalAction] = useState("plus");

  let currentActiveAction = localAction;
  if (isSearchActive) currentActiveAction = "search";
  if (isSettingsOpen) currentActiveAction = "settings";

  const handlePlusClick = () => {
    setLocalAction("plus");
    setIsSearchActive(false);
    setIsSettingsOpen(false);
    if (onCreateNote) onCreateNote();
  };

  const handleSearchClick = () => {
    setIsSettingsOpen(false); // Close settings when search panel opens
    setIsSearchActive(!isSearchActive);
    setLocalAction(isSearchActive ? "plus" : "search");
  };

  const handleSettingsClick = () => {
    setIsSearchActive(false); // Close search when settings overlay displays
    const nextSettingsState = !isSettingsOpen;
    setIsSettingsOpen(nextSettingsState);
    setLocalAction(nextSettingsState ? "settings" : "plus");
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-[60%] flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 p-2 rounded-2xl shadow-2xl z-50 transition-all">
      {/* Plus Button */}
      <button
        onClick={handlePlusClick}
        className={`p-3 rounded-xl transition-all duration-200 ${
          currentActiveAction === "plus"
            ? "bg-gray-800 text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <Plus size={20} />
      </button>

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className={`p-3 rounded-xl transition-all duration-200 ${
          currentActiveAction === "search"
            ? "bg-gray-800 text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <Search size={20} />
      </button>

      {/* Settings Button */}
      <button
        onClick={handleSettingsClick}
        className={`p-3 rounded-xl transition-all duration-200 ${
          currentActiveAction === "settings"
            ? "bg-gray-800 text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <Settings size={20} />
      </button>
    </div>
  );
};

export default FloatingActionMenu;
