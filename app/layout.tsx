import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MineOps Manager · Demo",
  description: "Demo estática de MineOps Manager, gestión de operaciones mineras. Datos de muestra.",
  robots: { index: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
