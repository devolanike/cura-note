import React from "react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Cura has completely altered my technical draft pipeline. Swapping complex sidebars for a highly polished editorial grid feels incredibly refreshing.",
      author: "Evelyn Sterling",
      role: "Architectural Designer, Silencio Visuals",
    },
    {
      quote:
        "The auto-save speed combined with absolute focus layouts makes composing long notes feel effortless. It is the ultimate digital writing canvas.",
      author: "Julian Vance",
      role: "Director, Contemporary Spaces Studio",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-200 relative z-10 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column: Heading */}
        <div className="sticky top-24">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            Endorsements &bull; Tested Validation
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-zinc-950 uppercase tracking-tighter mt-4 leading-[0.9]">
            Validated by global designers.
          </h2>
          <p className="text-sm text-zinc-600 font-medium leading-relaxed mt-8 max-w-sm">
            We partner with leading architectural teams and individual creators
            to ensure our layouts match active high-concentration sessions.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="flex flex-col gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-zinc-950"
            >
              <p className="text-base sm:text-lg text-zinc-900 font-medium leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="mt-6 flex flex-col text-left">
                <span className="text-xs font-black uppercase text-zinc-950 tracking-widest">
                  {item.author}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold tracking-wider mt-0.5">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
