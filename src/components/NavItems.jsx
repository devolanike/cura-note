import React from "react";

const NavItems = ({ icon, label, isActive, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 
        ${
          isActive
            ? "bg-gray-100 text-black font-semibold border-l-4 border-black"
            : "text-gray-500 hover:bg-gray-50 hover:text-black border-l-4 border-transparent"
        }`}
      >
        <span className={isActive ? "text-black" : "text-gray-400"}>
          {icon}
        </span>
        <span className="tracking-tight">{label}</span>
      </button>
    </>
  );
};

export default NavItems;
