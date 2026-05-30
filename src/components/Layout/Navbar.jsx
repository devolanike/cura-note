import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line
import { FileText, Menu, X, ChevronRight } from "lucide-react";
import { useLanding } from "../../context/LandingContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useLanding();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-300/80 bg-[#e7e7e5]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-zinc-950 flex items-center justify-center relative shadow-sm group">
            <FileText className="w-5 h-5 text-[#e7e7e5] stroke-2" />
          </div>
          <span className="text-xl font-black tracking-tight text-zinc-950">
            Cura<span className="text-zinc-500 font-normal">.</span>
          </span>
        </div>

        {/* Navigation Links - Crisp Light Zinc */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-600">
          <a
            href="#features"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            System Core
          </a>
          <a
            href="#editor-interactive"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            The Canvas
          </a>
          <a
            href="#comparison"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            Comparison
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/login"
            className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Sign In
          </a>
          <Link
            to="/Dashboard"
            className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest bg-zinc-950 hover:bg-zinc-800 text-[#e7e7e5] transition-all duration-200 flex items-center gap-1.5 shadow-sm"
          >
            Go to Workspace
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-950 hover:text-zinc-600 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-b border-zinc-300 bg-[#e7e7e5] px-6 py-6 flex flex-col gap-4 shadow-xl"
          >
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-zinc-900 hover:text-zinc-600 py-1"
            >
              System Core
            </a>
            <a
              href="#editor-interactive"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-zinc-900 hover:text-zinc-600 py-1"
            >
              The Canvas
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-zinc-900 hover:text-zinc-600 py-1"
            >
              Philosophy
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-zinc-900 hover:text-zinc-600 py-1"
            >
              Licensing
            </a>
            <hr className="border-zinc-300" />
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="/login"
                className="text-sm font-bold text-zinc-600 text-center py-2 hover:text-zinc-900"
              >
                Sign In
              </a>
              <Link
                to="/Dashboard"
                className="w-full py-3 rounded-lg text-center text-xs font-black uppercase tracking-widest bg-zinc-950 text-[#e7e7e5]"
              >
                Go to Workspace
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
