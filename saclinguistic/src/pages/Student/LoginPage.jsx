import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [explodingWords, setExplodingWords] = useState([]);

  useEffect(() => {
    const words = ["BOOM!", "ZAP!", "POW!", "WOW!", "READ!", "FUN!", "A+"];
    const colors = ["text-red-500", "text-blue-600", "text-green-500", "text-purple-600", "text-orange-500"];

    const interval = setInterval(() => {
      const id = Date.now();
      const text = words[Math.floor(Math.random() * words.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random position: Left (2-17%) or Right (83-98%) to avoid center form
      const isLeft = Math.random() > 0.5;
      const left = isLeft
        ? Math.floor(Math.random() * 15) + 2
        : Math.floor(Math.random() * 15) + 83;
      const top = Math.floor(Math.random() * 80) + 10; // 10-90% vertical height

      setExplodingWords((prev) => [...prev, { id, text, color, left, top }]);

      // Cleanup word after animation (2 seconds)
      setTimeout(() => {
        setExplodingWords((prev) => prev.filter((w) => w.id !== id));
      }, 2000);
    }, 800); // Spawn a new word every 800ms

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("student-name");
    const name = nameInput ? nameInput.value : "Friend";
    navigate("/greetings", { state: { name } });
  };
  return (
    <>
      <style>{`
        @keyframes explode {
          0% { transform: scale(0.5) rotate(-10deg); opacity: 0; }
          20% { opacity: 1; transform: scale(1.2) rotate(10deg); }
          100% { opacity: 0; transform: scale(2) rotate(0deg) translateY(-50px); }
        }
      `}</style>
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 p-4 font-sans overflow-x-hidden">
        {/* <!-- Exploding Words Background --> */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {explodingWords.map((word) => (
            <div
              key={word.id}
              className={`absolute font-black text-4xl ${word.color}`}
              style={{
                left: `${word.left}%`,
                top: `${word.top}%`,
                animation: "explode 2s ease-out forwards",
                textShadow: "2px 2px 0px rgba(255,255,255,0.5)",
              }}
            >
              {word.text}
            </div>
          ))}
        </div>
        {/* <!-- BEGIN: MainContainer --> */}
        {/* <!-- This is the main wrapper that ensures the layout is centered and responsive --> */}
        <main class="relative w-full max-w-2xl" data-purpose="login-container">
          {/* <!-- Floating Decorative Elements (Top Left) --> */}
          <div class="absolute -top-16 -left-16 w-32 h-32 bg-yellow-400 rounded-full opacity-50 blur-2xl animate-pulse"></div>
          {/* <!-- BEGIN: LoginCard --> */}
          <section
            class="bg-white/90 backdrop-blur-md rounded-[40px] border-8 border-indigo-400 shadow-2xl p-6 md:p-8 relative overflow-hidden"
            data-purpose="login-card"
          >
            {/* <!-- Card Header --> */}
            <header class="text-center mb-4">
              <h1 class="text-3xl md:text-5xl font-black text-indigo-600 drop-shadow-lg tracking-tight mb-2">
                Welcome to the <br />
                <span class="text-orange-500">Word-O-Matic!</span>
              </h1>
              <p class="text-lg md:text-xl font-bold text-indigo-800/70">
                The robots are confused... Can you help them talk?
              </p>
            </header>
            {/* <!-- BEGIN: LoginForm --> */}
            <form action="#" class="space-y-4" onSubmit={handleSubmit}>
              {/* <!-- Name Field Group --> */}
              <div class="flex flex-col gap-3">
                <label
                  class="text-lg font-black text-blue-600 ml-2"
                  for="student-name"
                >
                  What is your Name? 💬
                </label>
                <input
                  class="w-full p-3 text-xl font-bold rounded-2xl border-4 border-blue-200 text-indigo-900 placeholder-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                  id="student-name"
                  placeholder="Type your name here..."
                  required=""
                  type="text"
                />
              </div>
              {/* <!-- Age Field Group --> */}
              <div class="flex flex-col gap-3">
                <label
                  class="text-lg font-black text-green-600 ml-2"
                  for="student-age"
                >
                  How old are you? 🎂
                </label>
                <select
                  class="w-full p-3 text-xl font-bold rounded-2xl border-4 border-green-200 text-indigo-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none appearance-none bg-white"
                  id="student-age"
                  required=""
                >
                  <option disabled="" selected="" value="">
                    Pick your age
                  </option>
                  <option value="9">9 years old</option>
                  <option value="10">10 years old (Grade 5)</option>
                  <option value="11">11 years old (Grade 6)</option>
                  <option value="12">12 years old</option>
                  <option value="13">13+ years old</option>
                </select>
              </div>
              {/* <!-- School Field Group --> */}
              <div class="flex flex-col gap-3">
                <label
                  class="text-lg font-black text-purple-600 ml-2"
                  for="student-school"
                >
                  Which School? 🏫
                </label>
                <input
                  class="w-full p-3 text-xl font-bold rounded-2xl border-4 border-purple-200 text-indigo-900 placeholder-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                  id="student-school"
                  placeholder="Enter your school..."
                  required=""
                  type="text"
                />
              </div>
              {/* <!-- BEGIN: ActionArea --> */}
              <div class="flex flex-col items-center pt-4">
                {/* <!-- The bouncy adventure button --> */}
                <button
                  class="group relative w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white text-2xl md:text-3xl font-black py-3 px-12 rounded-full shadow-[0_6px_0_0_rgba(194,65,12,1)] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4"
                  type="submit"
                >
                  <span>START ADVENTURE</span>
                  <span class="text-3xl group-hover:scale-125 transition-transform">
                    🚀
                  </span>
                </button>
                <p class="mt-4 text-indigo-500 font-bold flex items-center gap-2">
                  <span>Ready to solve the Mystery of the Word-O-Matic?</span>
                </p>
              </div>
              {/* <!-- END: ActionArea --> */}
            </form>
            {/* <!-- END: LoginForm --> */}
            {/* <!-- Background Visual Accents (Inside Card) --> */}
            <div class="absolute bottom-4 right-4 text-5xl opacity-20 pointer-events-none rotate-12">
              ⚙️
            </div>
            <div class="absolute top-4 right-8 text-5xl opacity-20 pointer-events-none -rotate-12">
              💬
            </div>
            <div class="absolute bottom-20 left-4 text-5xl opacity-10 pointer-events-none">
              ⚡
            </div>
          </section>
          {/* <!-- END: LoginCard --> */}
          {/* <!-- Footer Visuals --> */}
        </main>
        {/* <!-- END: MainContainer --> */}
        {/* <!-- Floating Decorative Elements (Bottom Right) --> */}
      </div>
    </>
  );
}
