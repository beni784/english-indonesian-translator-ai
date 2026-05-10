"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button onClick={() => setDark((v) => !v)} className="rounded-xl border border-slate-300 p-2 dark:border-slate-700">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
