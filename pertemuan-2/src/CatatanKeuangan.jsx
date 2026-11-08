// src/CatatanKeuangan.jsx
import { useState, useEffect } from "react";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";
import RingkasanSaldo from "./RingkasanSaldo";

function CatatanKeuangan() {
  // State utama: baca dari localStorage dulu, jika kosong atau rusak pakai array kosong
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    try {
      const dataTersimpan = localStorage.getItem("catatan-keuangan");
      return dataTersimpan ? JSON.parse(dataTersimpan) : [];
    } catch {
      return [];
    }
  });

  // useEffect: simpan ke localStorage setiap kali daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Menambah transaksi: buat array BARU (transaksi baru di urutan paling atas)
  const tambahTransaksi = (data) => {
    const transaksiBaru = { id: Date.now(), ...data };
    setDaftarTransaksi([transaksiBaru, ...daftarTransaksi]);
  };

  // Menghapus transaksi: ambil semua KECUALI yang id-nya sama
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(
      daftarTransaksi.filter((transaksi) => transaksi.id !== id),
    );
  };

  // Nilai turunan: dihitung dari state, tidak perlu state baru
  const totalMasuk = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === "pemasukan")
    .reduce((jumlah, transaksi) => jumlah + transaksi.nominal, 0);

  const totalKeluar = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === "pengeluaran")
    .reduce((jumlah, transaksi) => jumlah + transaksi.nominal, 0);

  const saldo = totalMasuk - totalKeluar;

  return (
    <>
      <h2 className="judul-bagian">Catatan Keuangan Mini</h2>
      <p className="subjudul">
        Tugas 3: formulir terkendali, saldo otomatis, dan localStorage
      </p>

      <Kartu judul="Ringkasan Saldo">
        <RingkasanSaldo
          totalMasuk={totalMasuk}
          totalKeluar={totalKeluar}
          saldo={saldo}
        />
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {/* Conditional rendering: pesan khusus jika belum ada transaksi */}
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">
            Belum ada transaksi. Yuk catat transaksi pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((transaksi) => (
              <ItemTransaksi
                key={transaksi.id}
                transaksi={transaksi}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </>
  );
}

export default CatatanKeuangan;
