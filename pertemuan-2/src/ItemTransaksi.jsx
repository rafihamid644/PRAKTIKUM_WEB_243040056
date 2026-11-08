// src/ItemTransaksi.jsx
import { formatRupiah } from "./formatRupiah";

function ItemTransaksi({ transaksi, onHapus }) {
  const adalahPemasukan = transaksi.jenis === "pemasukan";

  return (
    <li className="item-keuangan">
      <span className="keterangan">{transaksi.keterangan}</span>

      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={adalahPemasukan ? "nominal-masuk" : "nominal-keluar"}>
        {adalahPemasukan ? "+" : "-"} {formatRupiah(transaksi.nominal)}
      </span>

      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
