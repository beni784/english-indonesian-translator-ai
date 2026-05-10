"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ModeSelector from "@/components/ModeSelector";
import TranslatorForm from "@/components/TranslatorForm";
import ResultSection from "@/components/ResultSection";
import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import ThemeToggle from "@/components/ThemeToggle";
import { Mode, TranslationResult } from "@/lib/types";

export default function Home() {
  const [mode, setMode] = useState<Mode>("english");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [error, setError] = useState("");

  const handleResult = (data: TranslationResult | null, err?: string) => {
    setResult(data);
    setError(err || "");
  };

  return (
    <main className="mx-auto min-h-screen max-w-5xl p-4 md:p-8">
      <div className="mb-4 flex justify-end"><ThemeToggle /></div>
      <Header />
      <ModeSelector mode={mode} setMode={setMode} />
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
        <TranslatorForm mode={mode} onResult={handleResult} setLoading={setLoading} />
      </div>
      <div className="mt-5">{loading ? <LoadingState /> : error ? <div className='rounded-xl bg-rose-100 p-4 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200'>{error}</div> : result ? <ResultSection data={result} /> : <EmptyState />}</div>
    </main>
  );
}
