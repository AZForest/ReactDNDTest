import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "stringType",
    item: data,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: isDragging ? "green" : "red",
        height: "100px",
        width: "100px",
        margin: "10px auto",
      }}
    >
      {data.name}
      {data.depth}
    </div>
  );
};

export default SideBarItem;
