import React from "react";

export default function TimelineCard({ icon, title, subtitle, year, score, img, type }) {
  let imageStyle = {};

  if (type === "project") {
    imageStyle = {
      width: "100%",
      aspectRatio: "16/9",   // ✅ fixed widescreen
      objectFit: "cover",    // crop extra parts
      borderRadius: "12px",
      marginBottom: "12px",
    };
  } else if (type === "certificate" || type === "award") {
    imageStyle = {
      width: "100%",
      aspectRatio: "4/3",    // ✅ like A4 paper
      objectFit: "contain",  // show full certificate
      borderRadius: "10px",
      marginBottom: "10px",
      background: "#f8f8f8", // light bg for transparent areas
      padding: "6px",
    };
  }

  const baseStyle =
    type === "certificate" || type === "award"
      ? {
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
          transition: "transform 0.2s",
        }
      : {
          borderLeft: "3px solid #ff4da6",
          padding: "15px 20px",
          marginBottom: "20px",
          background: "#fff",
          borderRadius: "10px",
          position: "relative",
        };

  return (
    <div
      style={baseStyle}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {img && <img src={img} alt={title} style={imageStyle} />}
      <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>{title}</h4>
      {subtitle && <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{subtitle}</p>}
      {year && <p style={{ margin: "4px 0", fontSize: "13px", color: "#999" }}>{year}</p>}
      {score && <p style={{ marginTop: "5px", fontWeight: "500" }}>{score}</p>}
      {!(type === "certificate" || type === "award") && (
        <span
          style={{
            position: "absolute",
            left: "-9px",
            top: "15px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#ff4da6",
          }}
        >
          {icon}
        </span>
      )}
    </div>
  );
}
