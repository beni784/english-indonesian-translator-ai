"use client";

import { useState } from "react";
import { Mode, TranslationResult } from "@/lib/types";

export default function TranslatorForm({ mode, onResult, setLoading }: { mode: Mode; onResult: (v: TranslationResult | null, err?: string) => void; setLoading: (v: boolean) => void; }) {
  const [text, setText] = useState("");

  const submit = async () => {
    if (!text.trim()) return onResult(null, "Input tidak boleh kosong.");
    setLoading(true);
    onResult(null);
    try {
      const res = await fetch("/api/translate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, mode }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menerjemahkan.");
      onResult(data);
    } catch (e) {
      onResult(null, e instanceof Error ? e.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} className="w-full rounded-2xl border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-900" placeholder={mode === "english" ? "Masukkan teks Inggris..." : "Masukkan teks Indonesia..."} />
      <div className="flex gap-2">
        <button onClick={submit} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">Translate & Explain</button>
        <button onClick={() => setText("")} className="rounded-xl border border-slate-300 px-4 py-2 text-sm dark:border-slate-700">Clear</button>
      </div>
    </div>
  );
}
