export default function Main() {
  return (
    <>
      <main class="flex-grow flex flex-col items-center justify-center p-6 @container">
        <div class="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Illustration Section --> */}
          <div class="hidden lg:flex flex-col items-center text-center space-y-8">
            <div class="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_-20px_50px_rgba(19,127,236,0.2)]">
              <img
                alt="Friendly language mascot with books and globes"
                class="w-4/5 h-auto object-contain drop-shadow-xl"
                data-alt="A friendly blue mascot holding a book and speech bubbles"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4o04MWz-MFdhlrn5MgEvCw7PcX4LnSsofJ83XXuVdE4iRzMLT87QLGfqvdJT_iAMdrEAgYmNIQS2wz8scqjYxwRnNj2pROoDWdHDrZve2CN4OM43dX8E90PiGeuIsDTOqg-vwFx1AS-qP-NuqgCUi-cW55_HFplhW9B73gj213uY-GlVEp39UFsB8hmmVnsZOqoP8gyFzwoMKgVoDIzO02G673V2g6xeu_Lc8HcArw522dOGlq5szdqnZuE0gTL0IJLaMUSDaA5Da"
              />
              {/* <!-- Decorative Elements --> */}
              <div class="absolute top-10 right-10 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-primary/10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <span class="material-symbols-outlined text-primary text-3xl">
                  translate
                </span>
              </div>
              <div class="absolute bottom-20 left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-primary/10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <span class="material-symbols-outlined text-yellow-500 text-3xl">
                  menu_book
                </span>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-slate-800 dark:text-white">
                Ready for your adventure?
              </h2>
              <p class="text-slate-500 dark:text-slate-400 mt-2 text-lg">
                Join your classmates and start learning today!
              </p>
            </div>
          </div>
          {/* <!-- Login Form Container --> */}
          <div class="w-full max-w-md mx-auto">
            <div class="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
            <div class="bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                  Student Login Form
                </h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Please enter your details to begin
                </p>
              </div>
              <form class="space-y-6" onsubmit="return false;">
                {/* <!-- Name Input --> */}
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    What is your name?
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span class="material-symbols-outlined text-[20px]">
                        person
                      </span>
                    </div>
                    <input
                      class="w-full pl-11 pr-4 py-4 bg-black/20 border-2 border-white/10 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]"
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </div>
                </div>
                {/* <!-- Age Selection --> */}
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    How old are you?
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span class="material-symbols-outlined text-[20px]">
                        cake
                      </span>
                    </div>
                    <select class="w-full pl-11 pr-4 py-4 bg-black/20 border-2 border-white/10 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]">
                      <option disabled="" selected="" value="">
                        Select your age
                      </option>
                      <option value="10">10 years old</option>
                      <option value="11">11 years old</option>
                      <option value="12">12 years old</option>
                      <option value="13">13 years old</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                      <span class="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>
                {/* <!-- School Selection --> */}
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Your School
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span class="material-symbols-outlined text-[20px]">
                        apartment
                      </span>
                    </div>
                    <input
                      class="w-full pl-11 pr-4 py-4 bg-black/20 border-2 border-white/10 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]"
                      readonly=""
                      type="text"
                      value="St. Anne School Main Campus"
                    />
                  </div>
                </div>
                {/* <!-- Submit Button --> */}
                <button
                  class="w-full bg-gradient-to-b from-[#40c4ff] to-primary hover:from-[#40c4ff] hover:to-primary/90 text-white font-black py-5 rounded-2xl shadow-[0_8px_0_0_#0a5cb3,0_15px_30px_rgba(0,0,0,0.4)] transition-all flex items-center justify-center gap-3 group transform active:translate-y-[4px] active:shadow-[0_4px_0_0_#0a5cb3] uppercase tracking-wider text-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20"
                  type="submit"
                >
                  <span class="text-lg drop-shadow-md">READY? GO!</span>
                  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform drop-shadow-md">
                    rocket_launch
                  </span>
                </button>
              </form>
              <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                <p class="text-xs text-slate-400 dark:text-slate-500 italic flex items-center justify-center gap-1">
                  <span class="material-symbols-outlined text-xs">lock</span>
                  Student access restricted to registered Grade 5 &amp; 6 pupils
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
