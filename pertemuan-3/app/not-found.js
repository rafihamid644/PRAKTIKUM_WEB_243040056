// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
      <p className="text-4xl font-bold text-slate-900">404</p>
      <h1 className="mt-3 text-xl font-bold text-slate-900">
        Halaman atau Buku Tidak Ditemukan
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Maaf, alamat yang kamu buka tidak tersedia atau buku yang dicari tidak
        ada di katalog perpustakaan.
      </p>
      <Link
        href="/buku"
        className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Kembali ke Katalog Buku
      </Link>
    </div>
  );
}
