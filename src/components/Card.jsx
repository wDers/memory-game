import React from "react";

function Card({ item, id, handleClick, handleUnlock, value }) {
  const classes = item.stat ? item.stat : "";

  return (
    <div
      className={`card ${classes}`}
      onClick={() => handleClick(id)}
      onClickCapture={() => setTimeout(() => handleUnlock(value), 1000)}
    >
      <div>
        <span>?</span>
        <img src={item.img} alt="Webtechnológia ikon" />
      </div>
    </div>
  );
}

export default Card;
