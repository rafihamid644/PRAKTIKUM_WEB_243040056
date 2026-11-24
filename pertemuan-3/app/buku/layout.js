// app/buku/layout.js
export default function BukuLayout({ children }) {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-4">
        <p className="text-sm font-semibold text-slate-900">
          Info Peminjaman — Maksimal 3 buku selama 7 hari kerja dengan
          menunjukkan KTM aktif.
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Banner ini berasal dari Nested Layout (app/buku/layout.js), sehingga
          tetap muncul di halaman katalog maupun halaman detail buku.
        </p>
      </div>

      {children}
    </section>
  );
}
