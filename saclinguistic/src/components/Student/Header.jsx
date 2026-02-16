export default function Header() {
  return (
    <header class="w-full bg-white dark:bg-background-dark border-b border-primary/10 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div class="flex items-center gap-3">
        <div class="bg-primary p-2 rounded-lg text-white">
          <span class="material-symbols-outlined text-2xl">school</span>
        </div>
        <h1 class="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
          St. Anne School <span class="text-primary">Language Portal</span>
        </h1>
      </div>
      <div class="hidden md:flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
        <span class="flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">language</span> Grades
          5-6
        </span>
        <div class="h-4 w-[1px] bg-slate-200"></div>
        <span>Help Center</span>
      </div>
    </header>
  );
}