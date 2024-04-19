import React from "react";
import List from "./List";
import { useState } from "react";

const VegitableList = ({ Listitem }) => {
  let [activeList, setActiveList] = useState([]);
  const handleClick = (item, e) => {
    let newList = [...activeList, item];
    setActiveList(newList);
  };
  return (
    <ul className="list-group">
      {Listitem.map((item) => (
        <List
          key={item}
          Veglist={item}
          bought={activeList.includes(item)}
          clickButton={(e) => handleClick(item, e)}
        />
      ))}
    </ul>
  );
};

export default VegitableList;
