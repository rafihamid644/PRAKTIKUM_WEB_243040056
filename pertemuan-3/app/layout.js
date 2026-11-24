// app/layout.js
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "BacaKampus — Katalog Perpustakaan Mini",
  description:
    "Katalog perpustakaan mini menggunakan Next.js 16 dan App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-5 text-center text-sm text-slate-500">
          BacaKampus &copy; 2026 — Modul 3 Praktikum Pemrograman Web
        </footer>
      </body>
    </html>
  );
}
