import { useEffect, useRef, useState } from "react";

const WORD_LIST = [
  "Syntax",
  "Grammar",
  "Lexicon",
  "Phoneme",
  "Morpheme",
  "Semantics",
  "Pragmatics",
  "Context",
  "Ellipsis",
  "Variable",
  "Function",
  "Loop",
  "Array",
  "Object",
];

export default function GamePlay() {
  const syntaxRef = useRef(null);
  const grammarRef = useRef(null);
  const [syntaxWord, setSyntaxWord] = useState("Syntax");
  const [grammarWord, setGrammarWord] = useState("Grammar");

  useEffect(() => {
    const syntaxDiv = syntaxRef.current;
    const grammarDiv = grammarRef.current;

    if (syntaxDiv && grammarDiv) {
      // Collect the style (initial positions in pixels)
      let syntaxTop = parseFloat(window.getComputedStyle(syntaxDiv).top) || 0;
      let grammarTop = parseFloat(window.getComputedStyle(grammarDiv).top) || 0;
      const dropSpeed = 0.5; // Adjust speed of droppings

      const animateDroppings = () => {
        syntaxTop += dropSpeed;
        grammarTop += dropSpeed;

        // Reset position if they drop off screen to loop the effect
        if (syntaxTop > window.innerHeight) {
          syntaxTop = -100;
          setSyntaxWord(
            WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)],
          );
        }
        if (grammarTop > window.innerHeight) {
          grammarTop = -100;
          setGrammarWord(
            WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)],
          );
        }

        syntaxDiv.style.top = `${syntaxTop}px`;
        grammarDiv.style.top = `${grammarTop}px`;

        requestAnimationFrame(animateDroppings);
      };

      const animationId = requestAnimationFrame(animateDroppings);
      return () => cancelAnimationFrame(animationId);
    }
  }); // Empty dependencies as requested

  return (
    <>
      <div className="font-display antialiased overflow-hidden bg-background-light dark:bg-background-dark">
        <div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-between p-4 sm:p-8">
          {/* <!-- HUD: Top Navigation & Stats --> */}
          <div className="w-full max-w-6xl z-50 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* <!-- Score Tracker --> */}
            <div className="flex items-center gap-4 bg-background-dark/40 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 shadow-xl">
              <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">
                  sword_rose
                </span>
              </div>
              <div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-none mb-1">
                  Words Smashed
                </p>
                <p className="text-white text-3xl font-black leading-none">
                  1,240
                </p>
              </div>
            </div>
            {/* <!-- Level Info --> */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 mb-2">
                <span className="text-white font-bold tracking-tighter text-sm italic">
                  LEVEL 5: LEXICAL LEGEND
                </span>
              </div>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-yellow-400">
                  star
                </span>
                <span className="material-symbols-outlined text-yellow-400">
                  star
                </span>
                <span className="material-symbols-outlined text-yellow-400">
                  star
                </span>
                <span className="material-symbols-outlined text-yellow-400">
                  star
                </span>
                <span className="material-symbols-outlined text-white/30">
                  star
                </span>
              </div>
            </div>
            {/* <!-- Energy / Timer Bar --> */}
            <div className="w-full md:w-80 flex flex-col gap-2 bg-background-dark/40 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 shadow-xl">
              <div className="flex justify-between items-end">
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-none">
                  Energy / Timer
                </p>
                <p className="text-white text-sm font-black leading-none uppercase">
                  🚀 Boost Active!
                </p>
              </div>
              <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border border-white/20 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-primary to-orange-300 rounded-full shadow-[0_0_10px_rgba(236,91,19,0.8)]"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- CORE GAMEPLAY AREA: Falling Words & Bombs --> */}
          <div className="flex-1 w-full relative overflow-visible pointer-events-none">
            {/* <!-- Word 1: Falling Syntax --> */}
            <div ref={syntaxRef} className="absolute top-[10%] left-[15%]">
              <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-xl shadow-2xl rotate-[-5deg] border-4 border-indigo-400">
                <span className="text-indigo-900 text-4xl font-black tracking-tighter uppercase italic">
                  {syntaxWord}
                </span>
              </div>
              <span className="absolute -top-4 -right-4 text-3xl">✨</span>
            </div>
            {/* <!-- Word 2: Exploded Bomb (Good Job) --> */}
            <div className="absolute top-[30%] left-[45%] flex flex-col items-center justify-center animate-pulse"></div>
            {/* <!-- Word 3: Falling Grammar --> */}
            <div
              ref={grammarRef}
              className="absolute top-[20%] right-[10%]"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-xl shadow-2xl rotate-[8deg] border-4 border-pink-400">
                <span className="text-pink-900 text-4xl font-black tracking-tighter uppercase italic">
                  {grammarWord}
                </span>
              </div>
              <span className="absolute -top-4 -left-4 text-3xl">🔥</span>
            </div>
            {/* <!-- Word 4: Distant Word --> */}
            <div
              className="absolute top-[50%] left-[10%] opacity-80 scale-75 animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
          {/* <!-- CENTER BOTTOM: Sonic Microphone UI --> */}
          <div className="relative z-50 flex flex-col items-center gap-6 mb-8">
            {/* <!-- Sonic Microphone Outer Ring --> */}
            <div className="relative group">
              {/* <!-- Glowing Aura --> */}
              <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-[40px] animate-pulse shadow-[0_0_60px_rgba(59,130,246,0.9)]"></div>
              {/* <!-- Main Mic Housing --> */}
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-background-dark/80 border-4 border-blue-400/50 shadow-2xl backdrop-blur-xl">
                {/* <!-- Tech Inner Ring --> */}
                <div className="absolute w-28 h-28 rounded-full border border-dashed border-blue-300/30 animate-[spin_10s_linear_infinite]"></div>
                {/* <!-- Core Mic Icon --> */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center shadow-inner ring-4 ring-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-5xl">
                    mic
                  </span>
                </div>
              </div>
              {/* <!-- Floating Tech Bits --> */}
              <div className="absolute -top-4 -right-2 bg-blue-500 text-white p-1 rounded-full border-2 border-white shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-sm font-black">
                  graphic_eq
                </span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-primary text-white p-1 rounded-full border-2 border-white shadow-lg animate-pulse">
                <span className="material-symbols-outlined text-sm font-black">
                  keyboard_voice
                </span>
              </div>
            </div>
            {/* <!-- Action Prompt --> */}
            <div className="bg-background-dark/60 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 flex items-center gap-3">
              <span className="text-white font-black italic tracking-widest uppercase text-lg">
                Speak to Smash!
              </span>
              <span className="text-2xl">🎤</span>
            </div>
          </div>
          {/* <!-- Bottom Navigation / Extra Powerups --> */}
        </div>
      </div>
    </>
  );
}
