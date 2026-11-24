// components/TombolSimpan.jsx
"use client";

import { useState } from "react";

export default function TombolSimpan({ judulBuku }) {
  const [tersimpan, setTersimpan] = useState(false);
  const [jumlahPeminat, setJumlahPeminat] = useState(8);

  function handleKlik() {
    if (tersimpan) {
      setTersimpan(false);
      setJumlahPeminat((prev) => prev - 1);
    } else {
      setTersimpan(true);
      setJumlahPeminat((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={handleKlik}
        className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
          tersimpan
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
        }`}
      >
        {tersimpan ? "✓ Tersimpan di Daftar Baca" : "+ Simpan ke Daftar Baca"}
      </button>

      <span className="text-sm text-slate-600">
        {jumlahPeminat} mahasiswa menyimpan <strong>{judulBuku}</strong>
      </span>
    </div>
  );
}
