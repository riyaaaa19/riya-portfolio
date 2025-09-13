import React from "react";

export default function TimelineCard({ 
  icon, title, subtitle, year, score, img, type, github, live 
}) {
  let imageStyle = {};
  let containerStyle = {};
  let contentStyle = {};

  if (type === "project") {
    imageStyle = {
      width: "100%",
      aspectRatio: "16/9",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "10px",
    };
  } else if (type === "certificate" || type === "award") {
    imageStyle = {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "contain",
      background: "#f8f8f8",
      borderRadius: "10px",
      marginBottom: "10px",
      padding: "6px",
    };
  } else if (type === "education") {
    containerStyle = {
      borderLeft: "3px solid #ff4da6",
      padding: "15px 20px",
      marginBottom: "20px",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    };

    contentStyle = {
      flex: 1,
      paddingRight: "20px",
    };

    imageStyle = {
      width: "100px",   // Increased size
      height: "100px",  // Increased size
      objectFit: "cover",
      borderRadius: "50%",
      flexShrink: 0,
    };
  }

  const baseStyle =
    type === "certificate" || type === "award" || type === "project"
      ? {
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
          transition: "transform 0.2s",
        }
      : containerStyle;

  const buttonStyle = {
    display: "inline-block",
    margin: "6px",
    padding: "6px 12px",
    fontSize: "13px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    background: "#ff4da6",
    color: "#fff",
    textDecoration: "none",
    transition: "background 0.2s",
  };

  const hoverStyle = { background: "#e04494" };

  return (
    <div
      style={baseStyle}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {type === "education" ? (
        <>
          <div style={contentStyle}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>{title}</h4>
            {subtitle && <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{subtitle}</p>}
            {year && <p style={{ margin: "4px 0", fontSize: "13px", color: "#999" }}>{year}</p>}
            {score && <p style={{ marginTop: "5px", fontSize: "13px", color: "#444" }}>{score}</p>}
          </div>
          {img && <img src={img} alt={title} style={imageStyle} />}
          <span
            style={{
              position: "absolute",
              left: "-9px",
              top: "25px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#ff4da6",
            }}
          >
            {icon}
          </span>
        </>
      ) : (
        <>
          {img && <img src={img} alt={title} style={imageStyle} />}
          <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>{title}</h4>
          {subtitle && <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{subtitle}</p>}
          {year && <p style={{ margin: "4px 0", fontSize: "13px", color: "#999" }}>{year}</p>}
          {score && <p style={{ marginTop: "5px", fontSize: "13px", color: "#444" }}>{score}</p>}

          {type === "project" && (
            <div style={{ marginTop: "10px" }}>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}
                  onMouseOver={(e) => (e.currentTarget.style.background = hoverStyle.background)}
                  onMouseOut={(e) => (e.currentTarget.style.background = buttonStyle.background)}
                >
                  GitHub
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}
                  onMouseOver={(e) => (e.currentTarget.style.background = hoverStyle.background)}
                  onMouseOut={(e) => (e.currentTarget.style.background = buttonStyle.background)}
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
