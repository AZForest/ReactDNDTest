import { React, useState } from "react";
import SideBarItem from "./SideBarItem";
import DropItem from "./DropItem";

const SideBar = (props) => {
  return (
    <div
      style={{ backgroundColor: "gainsboro", height: "400px", width: "200px" }}
    >
      {props.data.map((item, i) => (
        <DropItem key={i} data={item} />
      ))}
    </div>
  );
};

export default SideBar;
