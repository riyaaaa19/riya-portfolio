import React from "react";

export default function TimelineCard({ icon, title, subtitle, year, score, img }) {
  return (
    <div style={{
      borderLeft: '3px solid #ff4da6',
      padding: '15px 20px',
      marginBottom: '20px',
      position: 'relative'
    }}>
      {img && (
        <img 
          src={img} 
          alt={title} 
          style={{width:'100%', height:'140px', objectFit:'cover', borderRadius:'8px', marginBottom:'10px'}} 
        />
      )}
      <h4 style={{margin: '0 0 6px 0', fontSize:'18px', fontWeight:'600'}}>{title}</h4>
      {subtitle && <p style={{margin:0, color:'#666'}}>{subtitle}</p>}
      {year && <p style={{margin:'4px 0', fontSize:'13px', color:'#999'}}>{year}</p>}
      {score && <p style={{marginTop:'5px', fontWeight:'500'}}>{score}</p>}
      <span style={{
        position: 'absolute',
        left: '-9px',
        top: '15px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: '#ff4da6'
      }} />
    </div>
  );
}
