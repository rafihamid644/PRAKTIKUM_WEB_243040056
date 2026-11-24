// app/buku/page.js
import { daftarBuku } from "@/data/buku";
import FilterBuku from "@/components/FilterBuku";

export default function KatalogBukuPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Katalog Buku</h1>
      <p className="mt-1 text-sm text-slate-600">
        Pilih salah satu buku di bawah untuk melihat ringkasan dan lokasi
        raknya.
      </p>

      {/* Komponen interaktif dipisah; halaman ini tetap Server Component */}
      <FilterBuku daftarBuku={daftarBuku} />
    </div>
  );
}
