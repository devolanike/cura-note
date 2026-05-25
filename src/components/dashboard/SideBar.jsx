import React from "react";
import { FileText, Star, Trash2, ShieldAlert } from "lucide-react";

const SideBar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: "all", label: "All Notes", icon: FileText },
    { id: "favorites", label: "Favorites", icon: Star },
    { id: "trash", label: "Trash", icon: Trash2 },
  ];

  return (
    <div className="w-64 h-screen border-r border-gray-200/80 bg-[#FAFAFA] flex flex-col justify-between p-6 select-none">
      <div>
        {/*Title Header */}
        <div className="flex items-center gap-2.5 mb-10 px-2">
          <div className="w-3 h-3 rounded-full bg-black animate-pulse" />
          <h1 className="font-serif font-bold text-lg tracking-tight text-gray-950">
            Cura Workspace
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)} // 💡 Triggers the switch up in Dashboard
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-sans transition-all duration-200 group ${
                  isActive
                    ? "bg-neutral-900 text-white font-medium shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                }`}
              >
                <Icon
                  size={16}
                  className={`transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-700"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Desktop User Bottom Badge */}
      <div className="flex items-center gap-3 border-t border-gray-200/60 pt-4 px-2">
        <div className="w-9 h-9 rounded-full bg-neutral-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-inner">
          NT
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs font-sans font-bold text-gray-900 truncate">
            NippyTech
          </h4>
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest truncate">
            Premium Curator
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
