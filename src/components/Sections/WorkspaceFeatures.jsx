import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line
import { BrainCircuit, Lock, Unlock, Trash2, RotateCcw } from "lucide-react";
import { useLanding } from "../../context/LandingContext";

export function FeatureSummary() {
  const { summaryState, setSummaryState, handleSummaryTrigger } = useLanding();

  return (
    <motion.div
      key="summary"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-5 w-full max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between">
        <span className="text-xxs tracking-widest uppercase font-bold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200">
          Cura AI Synthesis Suite
        </span>
        {summaryState !== "full" && (
          <button
            onClick={() => setSummaryState("full")}
            className="text-xs font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-950 flex items-center gap-1.5"
          >
            Reset Demo
          </button>
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
        Notes.txt
      </h3>

      <AnimatePresence mode="wait">
        {summaryState === "full" && (
          <motion.div
            key="fullText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
              Capture ideas the moment inspiration strikes,keep important
              information organized, and let AI help you make sense of it all.
              Whether you're taking study notes, planning projects, documenting
              meetings, tracking research, or simply collecting thoughts through
              out the day, Cura Note provides a seamless workspace designed to
              keep everything in one place. With powerful organization tools,
              smart search capabilities, and AI-powered summaries, you can
              quickly find what matters without digging through endless pages of
              content.
            </p>
            <button
              onClick={handleSummaryTrigger}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-zinc-950 text-[#e7e7e5] text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 self-start"
            >
              <BrainCircuit className="w-4 h-4" /> Create Premium Summary
            </button>
          </motion.div>
        )}

        {summaryState === "summarizing" && (
          <motion.div
            key="summarizingLoader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-8 gap-3"
          >
            <div className="w-8 h-8 rounded-full border-4 border-zinc-200 border-t-zinc-950 animate-spin" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 animate-pulse">
              Synthesizing research nodes...
            </span>
          </motion.div>
        )}

        {summaryState === "bullet" && (
          <motion.div
            key="bulletText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-4 border-l-2 border-emerald-500 pl-6 py-1"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              AI Executive Synthesis:
            </span>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-zinc-900 font-bold leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 stroke-3 mt-1.5 font-bold">
                  &bull;
                </span>
                Capture ideas instantly
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 stroke-3 mt-1.5 font-bold">
                  &bull;
                </span>
                Organize notes in one workspace
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 stroke-3 mt-1.5 font-bold">
                  &bull;
                </span>
                Generate AI-powered summaries
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 stroke-3 mt-1.5 font-bold">
                  &bull;
                </span>
                Find information quickly with smart search
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FeatureJwt() {
  const {
    isJwtAuthorized,
    isAuthorizing,
    handleAuthorizeJwt,
    setIsJwtAuthorized,
  } = useLanding();

  return (
    <motion.div
      key="jwt"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-5 w-full max-w-xl mx-auto"
    >
      <div className="flex items-center justify-between">
        <span className="text-xxs tracking-widest uppercase font-bold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200">
          Cryptographic Access Vault
        </span>
        {isJwtAuthorized && (
          <button
            onClick={() => setIsJwtAuthorized(false)}
            className="text-xs font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-950"
          >
            Lock Vault
          </button>
        )}
      </div>
      <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
        JSON Web Token Authorization
      </h3>
      <p className="text-sm text-zinc-700 font-semibold leading-relaxed">
        We secure all user database pathways with standard cryptographic tokens.
        No trackers, no cookies—completely isolated decrypt state.
      </p>
      <div className="p-4 rounded-xl border-2 border-zinc-950 bg-zinc-50 flex flex-col items-center justify-center gap-4 mt-2 w-full">
        {/* The Icon Container */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 border-zinc-950 transition-colors ${isJwtAuthorized ? "bg-emerald-100" : "bg-white"}`}
        >
          {isJwtAuthorized ? (
            <Unlock className="w-6 h-6 text-emerald-600" />
          ) : (
            <Lock className="w-6 h-6 text-zinc-950" />
          )}
        </div>

        {/* The Text Container - Centered */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-black uppercase tracking-wider text-zinc-950">
            Session Signature
          </span>
          <span className="text-[10px] font-mono text-zinc-500 font-bold break-all">
            {isJwtAuthorized
              ? "cura_payload.jwt_sec_token.verified"
              : "Session token unsigned"}
          </span>
        </div>

        {/* The Button - Full Width */}
        <button
          onClick={handleAuthorizeJwt}
          disabled={isAuthorizing || isJwtAuthorized}
          className={`w-full px-4 py-2.5 rounded-lg border-2 border-zinc-950 text-xs font-black uppercase tracking-widest transition-all ${isJwtAuthorized ? "bg-emerald-100 text-emerald-800 border-emerald-900" : "bg-zinc-950 text-[#e7e7e5] hover:bg-zinc-800"}`}
        >
          {isAuthorizing
            ? "Validating Key..."
            : isJwtAuthorized
              ? "Session Signed ✓"
              : "Verify Token"}
        </button>
      </div>{" "}
    </motion.div>
  );
}
export function FeatureTrash() {
  const { deletedNotes, handleDeleteNote, trashQueue, handleRecoverNote } =
    useLanding();

  return (
    <motion.div
      key="trash"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-4 w-full max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between">
        <span className="text-xxs tracking-widest uppercase font-bold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200">
          Active Trash Buffer Pipeline
        </span>
        <span className="text-xs font-bold text-zinc-500 select-none">
          Active items: {deletedNotes.length}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
        Draft Recovery Buffer
      </h3>
      <p className="text-sm text-zinc-700 font-semibold">
        Accidents happen. Deleted documents don't instantly vanish from
        existence. Retrieve your works immediately from the secure cache on the
        fly.
      </p>

      {/* Note list display with layout transitions */}
      <div className="flex flex-col gap-3 mt-2">
        <AnimatePresence mode="popLayout">
          {deletedNotes.map((note) => (
            <motion.div
              key={note.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0.25 } }}
              className="p-4 rounded-xl border border-zinc-300 bg-zinc-50 flex items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-sm font-bold text-zinc-950 truncate">
                  {note.title}
                </span>
                <span className="text-xs text-zinc-500 font-medium line-clamp-2 truncate max-w-sm sm:max-w-md">
                  {note.excerpt}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteNote(note.id);
                }}
                className="p-2 rounded-lg hover:bg-zinc-200 text-zinc-500 hover:text-zinc-950 transition-colors"
                title="Delete Note"
                type="button"
              >
                <Trash2 className="w-4.5 h-4.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {deletedNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-6 text-center text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 select-none"
          >
            Workspace notes empty. Click "Undo" to restore.
          </motion.div>
        )}
      </div>

      {/* Undo/Recover toast popup */}
      <AnimatePresence>
        {trashQueue.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="p-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-lg border-2 border-zinc-950"
          >
            <span>{trashQueue[trashQueue.length - 1].title} deleted.</span>
            <button
              onClick={handleRecoverNote}
              className="flex items-center gap-1.5 bg-zinc-950 text-[#e7e7e5] px-3.5 py-2 rounded-lg font-black tracking-widest hover:bg-zinc-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Undo Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
