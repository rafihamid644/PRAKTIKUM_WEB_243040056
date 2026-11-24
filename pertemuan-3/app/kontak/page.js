// app/kontak/page.js
import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Kontak BacaKampus</h1>
        <p className="mt-2 text-slate-600">
          Hubungi pustakawan untuk bertanya soal ketersediaan buku, peminjaman,
          atau usulan koleksi baru.
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
          <h2 className="font-semibold text-slate-900">Kontak Pustakawan</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Nama: Pustakawan BacaKampus</li>
            <li>Email: pustaka@bacakampus.example</li>
            <li>Telepon: (022) 000-0000</li>
          </ul>
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
