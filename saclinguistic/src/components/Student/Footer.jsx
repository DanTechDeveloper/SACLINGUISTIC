export default function Footer() {
    return (
      <>
        <footer class="w-full py-8 px-6 text-center">
          <div class="inline-flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-md rounded-full border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span class="material-symbols-outlined text-primary text-sm">
              auto_awesome
            </span>
            <p class="text-cyan-400 font-bold text-sm md:text-base uppercase tracking-widest">
              Learn, Practice, Unlock Your Potential!
            </p>
          </div>
          <div class="mt-4 text-slate-400 dark:text-slate-600 text-xs">
            © 2024 St. Anne School Educational Systems. All rights reserved.
          </div>
        </footer>
      </>
    );
}