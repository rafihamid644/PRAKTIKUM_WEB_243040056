// src/BadgeSkill.jsx
const warnaLevel = {
  Pemula: { bg: "#FFF3CD", text: "#856404" },
  Menengah: { bg: "#CCE5FF", text: "#004085" },
  Mahir: { bg: "#D4EDDA", text: "#155724" },
};

function BadgeSkill({ namaSkill, level }) {
  const warna = warnaLevel[level] || { bg: "#E1E4E8", text: "#333" };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        margin: "4px 6px 4px 0",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: warna.bg,
        color: warna.text,
      }}
    >
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;
