import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/svg/html.svg", stat: "" },
      { id: 1, img: "/svg/html.svg", stat: "" },
      { id: 2, img: "/svg/css.svg", stat: "" },
      { id: 2, img: "/svg/css.svg", stat: "" },
      { id: 3, img: "/svg/sass.svg", stat: "" },
      { id: 3, img: "/svg/sass.svg", stat: "" },
      { id: 4, img: "/svg/tailwindcss.svg", stat: "" },
      { id: 4, img: "/svg/tailwindcss.svg", stat: "" },
      { id: 5, img: "/svg/js.svg", stat: "" },
      { id: 5, img: "/svg/js.svg", stat: "" },
      { id: 6, img: "/svg/react.svg", stat: "" },
      { id: 6, img: "/svg/react.svg", stat: "" },
      { id: 7, img: "/svg/nextjs.svg", stat: "" },
      { id: 7, img: "/svg/nextjs.svg", stat: "" },
      { id: 8, img: "/svg/git.svg", stat: "" },
      { id: 8, img: "/svg/git.svg", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function handleClick(id, value) {
    if (prev !== -1) {
      handleLock(value);
      check(id);
    } else {
      items[id].stat = "card__selected card__selected__first";
      setItems([...items]);
      setPrev(id);
      handleUnlock(value);
    }
  }

  function check(current, value) {
    if (items[current].id == items[prev].id) {
      handleCorrect();
    } else {
      handleWrong();
    }

    function handleCorrect() {
      items[current].stat = "card__selected card__correct";
      items[prev].stat = "card__selected card__correct";
      setItems([...items]);
      handleUnlock(value);
      setPrev(-1);
    }

    function handleWrong() {
      items[current].stat = "card__selected card__wrong";
      items[prev].stat = "card__selected card__wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  const handleLock = (value) => {
    for (value of items) {
      if (value["stat"] == "") {
        value["stat"] = "locked";
      }
    }
  };

  const handleUnlock = (value) => {
    for (value of items) {
      if (value["stat"] == "locked") {
        value["stat"] = "";
      }
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card
          item={item}
          key={index}
          handleClick={handleClick}
          handleUnlock={handleUnlock}
          id={index}
        />
      ))}
    </div>
  );
}

export default Cards;
