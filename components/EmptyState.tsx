import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
      <Sparkles className="mx-auto mb-3 animate-float text-indigo-500" />
      <p className="font-medium">Yuk mulai belajar bareng LinguaBridge AI ✨</p>
      <p className="text-sm text-slate-500">Masukkan kalimat lalu klik Translate & Explain.</p>
    </div>
  );
}
