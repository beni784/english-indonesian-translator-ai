export default function LoadingState() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-8 text-white">
      <div className="mb-2 h-2 w-full animate-pulse rounded bg-white/40" />
      <div className="mb-2 h-2 w-3/4 animate-pulse rounded bg-white/40" />
      <p className="text-sm">AI sedang menganalisis makna, konteks, dan gaya bahasa...</p>
    </div>
  );
}
