export type Mode = "english" | "indonesian";

export type TranslationResult = {
  mainTranslation: string;
  reasoning: string;
  simpleExplanation: string;
  wordBreakdown: { wordOrPhrase: string; meaning: string; note: string }[];
  usageSituations: string[];
  formalityLevel: string;
  alternatives: Record<string, string>;
  compatibleSentences: Record<string, string[]>;
  domainDifferences: Record<string, string>;
  slangAndSimilarExpressions: { expression: string; meaning: string; context: string; riskLevel: string }[];
  examples: Record<string, string[]>;
  commonMistakes: { wrong: string; correct: string; explanation: string }[];
  bestRecommendation: { useThisIf: string; avoidThisIf: string; safestVersion: string };
};
