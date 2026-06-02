import React, { useState, useEffect, useRef } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;
        setText((prev) => prev + (prev ? " " : "") + transcript);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert(
        "Voice recognition not supported in this browser. Try Chrome or Edge.",
      );
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddNote(text);
    setText("");
    if (isListening) recognitionRef.current.stop();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mb-16 relative group"
    >
      {/* Outer Linear Glow Layer */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-2xl blur opacity-30 group-focus-within:opacity-70 transition duration-500" />

      <div className="relative bg-[#121214] border border-zinc-800/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-700/50 transition-all duration-300">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your reminder or hit the mic to speak..."
          className="w-full h-28 bg-transparent text-zinc-100 placeholder-zinc-600 resize-none px-2 py-1 focus:outline-none text-[14px] leading-relaxed font-normal"
        />

        <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3 mt-2">
          {/* Audio Processing Wave Button Trigger */}
          <button
            type="button"
            onClick={toggleVoiceInput}
            className={`p-2.5 rounded-xl transition-all duration-300 relative ${
              isListening
                ? "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
            }`}
            title={isListening ? "Stop Listening" : "Start Voice Typing"}
          >
            {isListening && (
              <span className="absolute inset-0 rounded-xl bg-rose-500/20 animate-ping opacity-75" />
            )}
            <svg
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>

          {/* Premium Metallic Button Interaction */}
          <button
            type="submit"
            disabled={!text.trim()}
            className="relative bg-gradient-to-b from-zinc-100 to-zinc-300 disabled:from-zinc-800 disabled:to-zinc-850 text-zinc-950 px-5 py-2 rounded-xl text-xs font-semibold tracking-wide shadow-md hover:shadow-zinc-100/5 disabled:shadow-none active:scale-[0.98] transition-all duration-200"
          >
            Create Note
          </button>
        </div>
      </div>
    </form>
  );
}
