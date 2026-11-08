// src/FormTransaksi.jsx
import { useState } from "react";

function FormTransaksi({ onTambah }) {
  // Tiga state lokal: satu untuk setiap input
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan");

  // Validasi: keterangan tidak kosong (maks 50 karakter), nominal harus lebih dari 0
  const terlaluPanjang = keterangan.length > 50;
  const tidakValid =
    keterangan.trim() === "" || Number(nominal) <= 0 || terlaluPanjang;

  const tanganiKirim = (event) => {
    event.preventDefault(); // cegah halaman reload
    if (tidakValid) return;

    // "Melapor" ke induk. Nominal diubah ke ANGKA karena nilai input selalu berupa teks
    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form className="form" onSubmit={tanganiKirim}>
      <input
        className="input"
        type="text"
        placeholder="Keterangan, contoh: Uang saku"
        value={keterangan}
        onChange={(event) => setKeterangan(event.target.value)}
      />
      {terlaluPanjang && (
        <p className="galat">Keterangan maksimal 50 karakter.</p>
      )}

      <div className="baris">
        <input
          className="input"
          type="number"
          min="1"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(event) => setNominal(event.target.value)}
        />
        <select
          className="input"
          value={jenis}
          onChange={(event) => setJenis(event.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
