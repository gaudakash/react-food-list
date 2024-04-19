import React from "react";

const VegitableItem = () => {
  const vegitable = ["Tomato", "tindli", "binchi", "potato", "carrote"];

  return (
    <ul className="list-group">
      {vegitable.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default VegitableItem;
