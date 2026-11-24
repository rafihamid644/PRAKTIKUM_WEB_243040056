// components/FilterBuku.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

const daftarKategori = [
  "Semua",
  "Pemrograman",
  "Web",
  "UI/UX",
  "Sistem",
  "Umum",
];

export default function FilterBuku({ daftarBuku }) {
  // State: kategori yang sedang dipilih
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Saring daftar buku SEBELUM di-map; data asli tidak diubah
  const bukuTampil =
    kategoriAktif === "Semua"
      ? daftarBuku
      : daftarBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div>
      {/* Tombol filter: yang aktif tampil berbeda (className dinamis) */}
      <div className="mt-6 flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${
              kategoriAktif === kategori
                ? "bg-slate-900 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Menampilkan {bukuTampil.length} dari {daftarBuku.length} buku
      </p>

      {bukuTampil.length === 0 ? (
        <p className="mt-6 text-center text-sm italic text-slate-500">
          Belum ada buku pada kategori ini.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((buku) => (
            <div
              key={buku.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-400"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-2xl">
                    {buku.ikon}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      buku.status === "Tersedia"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {buku.status}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {buku.judul}
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  {buku.penulis} ({buku.tahun})
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                  {buku.ringkasan}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-slate-500">
                  {buku.kategori}
                </span>
                <Link
                  href={`/buku/${buku.id}`}
                  className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
