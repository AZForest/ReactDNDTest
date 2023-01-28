import React from "react";
import { useDrag } from "react-dnd";

const DragItemX = ({ node }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "stringType",
    item: node,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: "red",
        height: "100px",
        width: "100px",
        margin: "10px auto",
        // paddingLeft: `${entity.depth * 100}px`,
      }}
    >
      {node.name}
    </div>
  );
};

export default DragItemX;
