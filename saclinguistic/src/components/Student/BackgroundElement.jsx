export default function BackgroundElement({ children }) {
  return (
    <div class="bg-[#0a0f1e] text-white min-h-screen flex flex-col font-display selection:bg-primary/30">
      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute top-[10%] left-[5%] w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-[20%] right-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div class="absolute top-1/4 right-[15%] w-12 h-12 bg-white/10 rounded-lg rotate-12 blur-sm animate-pulse"></div>
        <div class="absolute bottom-1/3 left-[10%] w-8 h-8 bg-primary/30 rounded-full blur-[2px]"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </div>
      {children}
    </div>
  );
}
