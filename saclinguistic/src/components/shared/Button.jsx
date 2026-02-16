export default function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white text-2xl md:text-3xl font-black py-3 px-12 rounded-full shadow-[0_6px_0_0_rgba(194,65,12,1)] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4"
    >
      {text}
    </button>
  );
}
