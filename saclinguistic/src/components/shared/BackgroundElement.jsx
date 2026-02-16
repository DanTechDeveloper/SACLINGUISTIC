export default function BackgroundElement({ children }) {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 p-4 font-sans overflow-x-hidden">
      
      {children}
    </div>
  );
}
