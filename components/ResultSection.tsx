import { TranslationResult } from "@/lib/types";
import ResultCard from "./ResultCard";
import CopyButton from "./CopyButton";
import Badge from "./Badge";

export default function ResultSection({ data }: { data: TranslationResult }) {
  return (
    <div className="space-y-3">
      <ResultCard title="1. Terjemahan Utama">
        <div className="mb-2 flex items-center justify-between gap-3"><p>{data.mainTranslation}</p><CopyButton text={data.mainTranslation} /></div>
      </ResultCard>
      <ResultCard title="2. Penalaran Terjemahan">{data.reasoning}</ResultCard>
      <ResultCard title="3. Penjelasan Seperti ke Anak Kecil">{data.simpleExplanation}</ResultCard>
      <ResultCard title="4. Makna Kata per Kata"><ul>{data.wordBreakdown.map((w, i) => <li key={i}>• <b>{w.wordOrPhrase}</b>: {w.meaning} ({w.note})</li>)}</ul></ResultCard>
      <ResultCard title="5. Situasi Penggunaan"><ul>{data.usageSituations.map((s, i) => <li key={i}>• {s}</li>)}</ul></ResultCard>
      <ResultCard title="6. Tingkat Formalitas">
        <div className="mb-2"><Badge label={data.formalityLevel} /></div>
        <ul>{Object.entries(data.alternatives).map(([k,v]) => <li key={k}><b>{k}</b>: {v}</li>)}</ul>
      </ResultCard>
      <ResultCard title="7. Cocok Dipadukan dengan Kalimat Apa"><ul>{Object.entries(data.compatibleSentences).flatMap(([k,arr]) => arr.map((a,i)=><li key={`${k}-${i}`}>• <b>{k}</b>: {a}</li>))}</ul></ResultCard>
      <ResultCard title="8. Perbedaan Penggunaan di Berbagai Ranah"><ul>{Object.entries(data.domainDifferences).map(([k,v]) => <li key={k}><b>{k}</b>: {v}</li>)}</ul></ResultCard>
      <ResultCard title="9. Slang dan Ekspresi Sejenis"><ul>{data.slangAndSimilarExpressions.map((s,i)=><li key={i}>• <b>{s.expression}</b> — {s.meaning} ({s.context}) <Badge label={s.riskLevel} /></li>)}</ul></ResultCard>
      <ResultCard title="10. Contoh Kalimat">
        <div className="space-y-2">{Object.entries(data.examples).map(([k,arr]) => <div key={k}><div className="flex items-center justify-between"><b>{k}</b><CopyButton text={arr.join("\n")} /></div><ul>{arr.map((a,i)=><li key={i}>• {a}</li>)}</ul></div>)}</div>
      </ResultCard>
      <ResultCard title="11. Kesalahan Umum"><ul>{data.commonMistakes.map((m,i)=><li key={i}>❌ {m.wrong} → ✅ {m.correct} ({m.explanation})</li>)}</ul></ResultCard>
      <ResultCard title="12. Rekomendasi Terbaik"><p>Gunakan versi ini jika: {data.bestRecommendation.useThisIf}</p><p>Jangan gunakan versi ini jika: {data.bestRecommendation.avoidThisIf}</p><p>Versi paling aman adalah: <b>{data.bestRecommendation.safestVersion}</b></p></ResultCard>
    </div>
  );
}
