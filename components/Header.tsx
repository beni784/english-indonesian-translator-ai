import { BookOpenText } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 p-6 text-white shadow-lg">
      <div className="flex items-center gap-2">
        <BookOpenText />
        <h1 className="text-2xl font-bold">LinguaBridge AI</h1>
      </div>
      <p className="mt-2 text-sm text-white/90">Penerjemah pintar Inggris-Indonesia yang menjelaskan makna sampai tuntas.</p>
    </header>
  );
}
