import React from "react";

function SidebarDecorations() {
  return (
    <>
      <div className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-left select-none pointer-events-none items-center gap-3 z-0">
        <span className="text-[10px] font-black tracking-[0.4em] text-zinc-800 uppercase">
          .COME TO CURA NOTES
        </span>
      </div>
      <div className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none flex-col gap-1 items-center z-0">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="h-0.5 w-6 bg-zinc-950" />
        ))}
      </div>
    </>
  );
}

export default SidebarDecorations;
