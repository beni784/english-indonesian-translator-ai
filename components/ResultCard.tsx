export default function ResultCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300">{title}</h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}
