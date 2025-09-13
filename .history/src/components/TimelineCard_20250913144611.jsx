import React from "react";

export default function TimelineCard({ icon, title, subtitle, year, score, img }) {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(to bottom right, #fff, #ffe6f0)',
      borderRadius: '15px',
      padding: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    }}
    onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'}
    onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
    >
      <span style={{
        position: 'absolute',
        left: '-10px',
        top: '10px',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: '#ff4da6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}>
        {icon}
      </span>
      {img && <img src={img} alt={title} style={{width:'100%', height:'120px', objectFit:'cover', borderRadius:'10px', marginBottom:'10px'}} />}
      <h4>{title}</h4>
      {subtitle && <p style={{color:'#555'}}>{subtitle}</p>}
      {year && <p style={{color:'#888'}}>{year}</p>}
      {score && <p style={{marginTop:'5px', fontWeight:'bold'}}>{score}</p>}
    </div>
  )
}
