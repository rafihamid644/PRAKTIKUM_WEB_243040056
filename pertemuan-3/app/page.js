// app/page.js
import Link from "next/link";
import { daftarBuku } from "@/data/buku";

export default function HomePage() {
  const bukuPilihan = daftarBuku.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
        <span className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
          Perpustakaan Mini Teknik Informatika
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight">
          Selamat Datang di BacaKampus
        </h1>
        <p className="mt-3 max-w-xl text-slate-300">
          Cari koleksi buku pemrograman, web development, UI/UX, dan sistem
          komputer. Cek ketersediaan rak langsung sebelum berkunjung ke
          perpustakaan.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/buku"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Lihat Katalog Buku
          </Link>
          <Link
            href="/tentang"
            className="rounded-lg border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Info Layanan
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Buku Rekomendasi</h2>
          <Link
            href="/buku"
            className="text-sm font-medium text-slate-700 hover:underline"
          >
            Semua Koleksi &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {bukuPilihan.map((buku) => (
            <Link
              key={buku.id}
              href={`/buku/${buku.id}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-400 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-2xl">
                {buku.ikon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                {buku.judul}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{buku.penulis}</p>
              <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                {buku.kategori}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
