import { NextResponse } from "next/server";

const schemaHint = `{
  "mainTranslation": "",
  "reasoning": "",
  "simpleExplanation": "",
  "wordBreakdown": [{"wordOrPhrase":"","meaning":"","note":""}],
  "usageSituations": [],
  "formalityLevel": "",
  "alternatives": {"formal":"","casual":"","natural":"","professional":"","polite":"","slang":""},
  "compatibleSentences": {"openers":[],"replies":[],"followUps":[],"notRecommended":[]},
  "domainDifferences": {"dailyConversation":"","academic":"","business":"","professional":"","socialMedia":"","chat":"","email":"","internetCulture":"","slangYouth":"","internationalContext":""},
  "slangAndSimilarExpressions": [{"expression":"","meaning":"","context":"","riskLevel":""}],
  "examples": {"formal":[],"casual":[],"chat":[],"professional":[],"slang":[]},
  "commonMistakes": [{"wrong":"","correct":"","explanation":""}],
  "bestRecommendation": {"useThisIf":"","avoidThisIf":"","safestVersion":""}
}`;

export async function POST(req: Request) {
  try {
    const { text, mode } = await req.json();
    if (!text?.trim()) return NextResponse.json({ error: "Input kosong." }, { status: 400 });
    const key = process.env.OPENAI_API_KEY;
    if (!key) return NextResponse.json({ error: "OPENAI_API_KEY belum diset." }, { status: 500 });

    const instruction = mode === "english"
      ? "Kamu adalah ahli Bahasa Inggris dan Bahasa Indonesia. Terjemahkan teks Inggris berikut ke Bahasa Indonesia. Jangan hanya menerjemahkan. Jelaskan makna, alasan terjemahan, penjelasan sederhana seperti untuk anak kecil, situasi penggunaan, tingkat formalitas, alternatif formal dan informal, slang yang relevan, contoh kalimat, kesalahan umum, serta rekomendasi penggunaan terbaik. Jawab dalam Bahasa Indonesia yang jelas, ramah, dan mudah dipahami."
      : "Kamu adalah ahli Bahasa Indonesia dan Bahasa Inggris. Terjemahkan teks Indonesia berikut ke Bahasa Inggris. Jangan hanya menerjemahkan. Jelaskan makna, alasan terjemahan, penjelasan sederhana seperti untuk anak kecil, situasi penggunaan, tingkat formalitas, alternatif formal dan informal, slang yang relevan, contoh kalimat, kesalahan umum, serta rekomendasi penggunaan terbaik. Penjelasan tetap menggunakan Bahasa Indonesia agar mudah dipahami pengguna Indonesia.";

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `${instruction}\n\nTeks: ${text}\n\nKembalikan JSON valid persis dengan struktur ini: ${schemaHint}`,
      }),
    });

    const data = await response.json();
    const content = data.output_text || "";
    try {
      return NextResponse.json(JSON.parse(content));
    } catch {
      return NextResponse.json({ error: "Respons AI tidak valid JSON.", raw: content }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Gagal memproses permintaan." }, { status: 500 });
  }
}
