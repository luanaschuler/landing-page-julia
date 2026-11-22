import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Júlia | Viajante & Designer",
  description:
    "Viagens, criatividade e histórias visuais. Conheça o universo de Júlia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
