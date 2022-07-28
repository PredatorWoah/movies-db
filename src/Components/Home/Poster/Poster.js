import React from "react";
import "../Home.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Poster({ img }) {
  return (
    <>
      <div className={img ? 'poster' : 'poster poster__img'}>
        <img
          src={
            img
              ? ` ${base_url}${img}`
              : "https://img.freepik.com/premium-vector/dslr-camera-illustration-with-brushwork-camera-vector-sketch-illustration_231873-768.jpg?w=2000"
          }
        />
      </div>
    </>
  );
}

export default Poster;
