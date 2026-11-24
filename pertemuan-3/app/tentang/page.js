// app/tentang/page.js
import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Tentang BacaKampus
        </h1>
        <p className="mt-2 text-slate-600">
          BacaKampus adalah ruang baca mini di lingkungan Teknik Informatika
          yang menyediakan referensi pemrograman, desain antarmuka, dan sistem
          basis data.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Jam Layanan</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Senin - Jumat: 08.00 - 17.00 WIB</li>
            <li>Sabtu: 09.00 - 14.00 WIB</li>
            <li>Minggu &amp; Hari Libur: Tutup</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Lokasi Ruang Baca</h2>
          <p className="mt-2 text-sm text-slate-600">
            Jl. Dr. Setiabudi No.193, Gegerkalong, Kec. Sukasari, Kota Bandung,
            Jawa Barat 40153.
          </p>
        </div>
      </div>

      <Link
        href="/buku"
        className="inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Jelajahi Katalog Buku
      </Link>
    </div>
  );
}
