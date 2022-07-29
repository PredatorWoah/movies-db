import React from "react";
import "./Share.css";

function shareItem({ Icon, name, link }) {
  return (
    <>
      <a href={link} target="_blank" className="share__items">
        <Icon className="icon" />
        <div className="name">
          <span>{name}</span>
        </div>
      </a>
    </>
  );
}

export default shareItem;
