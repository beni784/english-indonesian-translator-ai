import { Languages } from "lucide-react";
import { Mode } from "@/lib/types";

export default function ModeSelector({ mode, setMode }: { mode: Mode; setMode: (v: Mode) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {([
        ["english", "English Translator", "EN → ID"],
        ["indonesian", "Indonesian Translator", "ID → EN"],
      ] as const).map(([key, title, desc]) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={`rounded-2xl border p-4 text-left transition ${mode === key ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30" : "border-slate-200 dark:border-slate-800"}`}
        >
          <Languages className="mb-2 text-indigo-500" size={18} />
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-slate-500">{desc}</p>
        </button>
      ))}
    </div>
  );
}
