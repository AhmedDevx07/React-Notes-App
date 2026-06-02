import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

export default function App() {
  // Safe initial local storage acquisition layer
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("sticky_notes_data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Keep state synchronizations persistent inside browser storage
  useEffect(() => {
    localStorage.setItem("sticky_notes_data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: crypto.randomUUID(),
      text,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 font-sans px-4 py-16 md:px-8">
      {/* High-fidelity Vector Mesh/Ambient Glow Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-sky-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Dynamic Studio Dashboard Branding */}
        <header className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800/60 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-4 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Workspace Active
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-500 bg-clip-text text-transparent selection:bg-transparent">
            Vocal Notes
          </h1>
          <p className="text-xs md:text-sm text-zinc-500 font-normal mt-3 max-w-sm leading-relaxed">
            An advanced minimalist workspace combining standard browser
            dictation with interactive bento modules.
          </p>
        </header>

        {/* Note Form Input Node */}
        <NoteForm onAddNote={addNote} />

        {/* Responsive CSS Masonry View Layer */}
        {notes.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800/60 rounded-2xl max-w-md mx-auto bg-[#121214]/30 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-zinc-700 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <p className="text-zinc-600 text-xs tracking-wide">
              No active modules. Trigger the mic to stream logs.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-5 [column-fill:_balance] w-full px-1">
            <AnimatePresence mode="popLayout">
              {notes.map((note, index) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  index={index}
                  onDelete={deleteNote}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
