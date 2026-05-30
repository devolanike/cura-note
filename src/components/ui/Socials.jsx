import { Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className="bg-white/50 p-4 rounded-lg border border-dashed border-zinc-400 font-mono text-[10px] text-zinc-950 w-64 backdrop-blur-sm">
      <div className="flex justify-between font-bold mb-3 pb-2 border-b border-dashed border-zinc-400/50">
        <span>SYS.CONTACT</span>
        <span>{currentDate}</span>
      </div>

      <div className="space-y-2 text-zinc-700 flex flex-col">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between hover:text-emerald-700 transition-colors cursor-pointer group"
        >
          <span className="flex items-center gap-2">
            <FiGithub size={12} strokeWidth={2.5} />
            <span>GITHUB</span>
          </span>
          <span className="font-bold group-hover:underline">/CuraNote</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between hover:text-emerald-700 transition-colors cursor-pointer group"
        >
          <span className="flex items-center gap-2">
            <FiLinkedin size={12} strokeWidth={2.5} />
            <span>LINKEDIN</span>
          </span>
          <span className="font-bold group-hover:underline">CONNECTED</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between hover:text-emerald-700 transition-colors cursor-pointer group"
        >
          <span className="flex items-center gap-2">
            <FiTwitter size={12} strokeWidth={2.5} />
            <span>X.CORP</span>
          </span>
          <span className="font-bold group-hover:underline">@CuraNote</span>
        </a>
      </div>

      <a
        href="mailto:hello@curanote.com"
        className="mt-4 pt-2 border-t border-dashed border-zinc-400 flex items-center justify-center gap-1.5 font-bold uppercase hover:bg-zinc-950 hover:text-white transition-all cursor-pointer rounded-sm py-1.5"
      >
        <Mail size={12} strokeWidth={2.5} />
        <span>INITIATE EMAIL</span>
        <ArrowUpRight size={12} strokeWidth={2.5} className="opacity-70" />
      </a>
    </div>
  );
};

export default Socials;
