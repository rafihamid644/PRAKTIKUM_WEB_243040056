// src/KartuProyek.jsx
function KartuProyek({ judul, deskripsi, tagar, repoUrl }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h3 style={{ margin: 0, color: "#1B365D" }}>{judul}</h3>
      <p
        style={{ margin: 0, fontSize: "14px", color: "#555", lineHeight: 1.5 }}
      >
        {deskripsi}
      </p>

      <div>
        {tagar.map((tag) => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              backgroundColor: "#E8EEF7",
              color: "#1B365D",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              margin: "0 6px 6px 0",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "8px 16px",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
