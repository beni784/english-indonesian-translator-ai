import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinguaBridge AI",
  description: "Translator cerdas Inggris-Indonesia dengan penjelasan mendalam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
