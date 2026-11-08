// src/RingkasanSaldo.jsx
import { formatRupiah } from "./formatRupiah";

function RingkasanSaldo({ totalMasuk, totalKeluar, saldo }) {
  return (
    <div className="ringkasan-saldo">
      <div className="kotak-saldo">
        <small>Pemasukan</small>
        <strong className="nominal-masuk">{formatRupiah(totalMasuk)}</strong>
      </div>
      <div className="kotak-saldo">
        <small>Pengeluaran</small>
        <strong className="nominal-keluar">{formatRupiah(totalKeluar)}</strong>
      </div>
      <div className="kotak-saldo">
        <small>Saldo</small>
        {/* Saldo merah jika minus, hijau jika tidak */}
        <strong className={saldo < 0 ? "nominal-keluar" : "nominal-masuk"}>
          {formatRupiah(saldo)}
        </strong>
      </div>
    </div>
  );
}

export default RingkasanSaldo;
