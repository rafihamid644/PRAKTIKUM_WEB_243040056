// app/buku/page.js
import Link from "next/link";
import { daftarBuku } from "@/data/buku";

export default function KatalogBukuPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Katalog Buku</h1>
      <p className="mt-1 text-sm text-slate-600">
        Pilih salah satu buku di bawah untuk melihat ringkasan dan lokasi
        raknya.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {daftarBuku.map((buku) => (
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
    </div>
  );
}
