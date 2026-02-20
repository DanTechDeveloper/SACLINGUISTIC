import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Greetings() {
  const location = useLocation();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


  // Get the name passed from the login page, or default to "Explorer"
  const name = location.state?.name || "Explorer";

  const handleOnClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert("/dashboard");
    }, 3000);
  }

  useEffect(() => {
    // Trigger animation after mount
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 p-4 font-sans overflow-hidden relative">
      {/* Floating Background Emojis */}
      <div className="absolute top-10 left-10 text-8xl animate-bounce opacity-50 duration-[3000ms]">
        🎈
      </div>
      <div className="absolute bottom-20 right-10 text-8xl animate-bounce opacity-50 delay-700 duration-[4000ms]">
        🌟
      </div>
      <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse opacity-40">
        ✨
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-7xl animate-pulse opacity-40 delay-300">
        ☁️
      </div>

      {/* Main Content */}
      <main
        className={`transform transition-all duration-1000 ease-out flex flex-col items-center text-center z-10 ${
          animate
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-20 opacity-0 scale-90"
        }`}
      >
        <div className="text-9xl mb-6 animate-bounce drop-shadow-2xl">🤖</div>

        <h1 className="text-6xl md:text-8xl font-black text-indigo-600 drop-shadow-lg tracking-tight mb-4">
          Hello,{" "}
          <span className="text-orange-500 inline-block hover:scale-110 transition-transform">
            {name}!
          </span>
        </h1>

        <p className="text-2xl md:text-4xl font-bold text-indigo-800/80 mt-4 max-w-3xl leading-relaxed">
          Your adventure is about to begin! <br /> Are you ready?
        </p>

        <button
          onClick={handleOnClick}
          className="mt-12 bg-white text-indigo-600 hover:bg-indigo-50 text-3xl md:text-4xl font-black py-6 px-16 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 transition-all border-4 border-indigo-200"
        >
          LET'S GO! 🚀
        </button>
      </main>
      {isLoading && (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-indigo-900/95 backdrop-blur-sm transition-all duration-500">
      <div className="text-9xl animate-bounce mb-8">🤖</div>
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg animate-pulse text-center px-4">
        Loading Adventure...
      </h2>
      <div className="flex gap-4 mt-8">
        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-6 h-6 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  )};
    </div>
  );
}
