import React from 'react'
import '../Home.css';
const base_url = "https://image.tmdb.org/t/p/original";

function Poster({img}) {
  return (
    <>
    <div className="poster">
        <img src={`${base_url}${img}`} />
    </div>
    </>
  )
}

export default Poster