import React from "react";
import Socials from "../ui/Socials";

function Footer() {
  return (
    <footer className="w-full bg-[#e7e7e5]/60 backdrop-blur-sm border-t border-zinc-300/80 pt-16 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <h3 className="font-black text-lg tracking-tighter text-zinc-950 uppercase">
            Cura.
          </h3>
          <p className="text-[11px] text-zinc-500 font-medium mt-4 leading-relaxed max-w-xs">
            A premium digital workspace designed with simplicity at its core.
            Cura helps with clarity, organization and absolute focus.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
            Platform
          </h4>
          <ul className="space-y-2 text-xs font-bold text-zinc-600">
            {["System Core", "The Canvas", "Licensing", "Dashboard"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-zinc-950 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
            Legal
          </h4>
          <ul className="space-y-2 text-xs font-bold text-zinc-600">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Compliance",
              "Security",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-zinc-950 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Socials />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-zinc-300 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500">
        <span>© 2026 CURA INC.</span>
        <span>ENGINEERED IN Nigeria</span>
      </div>
    </footer>
  );
}

export default Footer;
