import React from "react";
import { motion } from "framer-motion";

// Hardcoded themes mapping for absolute stability and compile insurance
const THEMES = [
  {
    border: "border-amber-500/30",
    text: "text-amber-300",
    bgGlow: "from-amber-500/5",
  },
  {
    border: "border-sky-500/30",
    text: "text-sky-300",
    bgGlow: "from-sky-500/5",
  },
  {
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    bgGlow: "from-emerald-500/5",
  },
  {
    border: "border-purple-500/30",
    text: "text-purple-300",
    bgGlow: "from-purple-500/5",
  },
  {
    border: "border-rose-500/30",
    text: "text-rose-300",
    bgGlow: "from-rose-500/5",
  },
];

export default function NoteCard({ note, onDelete, index }) {
  const theme = THEMES[index % THEMES.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
        transition: { duration: 0.2 },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className={`relative w-full bg-gradient-to-br ${theme.bgGlow} to-transparent bg-[#111113] border ${theme.border} p-6 rounded-2xl flex flex-col justify-between group break-inside-avoid mb-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)]`}
    >
      {/* Light Reflection Foil */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent" />

      {/* Main Content Render */}
      <div className="min-h-[70px] w-full mb-5">
        <p className="text-[14.5px] text-zinc-200 font-normal leading-relaxed tracking-wide whitespace-pre-wrap selection:bg-zinc-800">
          {note.text}
        </p>
      </div>

      {/* Footer Meta Module */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 w-full">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${theme.text} bg-current opacity-70 group-hover:animate-pulse`}
          />
          <span className="text-[11px] text-zinc-500 font-mono tracking-wider">
            {note.date}
          </span>
        </div>

        {/* Soft Delete Interactive Trigger */}
        <button
          onClick={() => onDelete(note.id)}
          className="text-rose-400 p-2 rounded-xl hover:bg-rose-500/10 transition-all duration-200 group-hover:opacity-100 focus:opacity-100"
          aria-label="Delete note"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-16v4M4 7h16"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
