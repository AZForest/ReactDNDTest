import React from "react";
import { useDrop, useDrag } from "react-dnd";

const DragItemY = ({ node, list, setList, children, depth }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "stringType",
    item: node,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "stringType",
    drop: (item, monitor) => {
      //   console.log("DropNode:");
      //   console.log(node);
      //   console.log(monitor.didDrop());

      if (monitor.didDrop()) {
        return setList([...list]);
      }

      item.id = Math.random();
      const newItem = { ...item };
      newItem.children = [];

      setList([...list, node.children.push(newItem)]);
      console.log("----------");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drag}>
      <div ref={drop}>
        <div
          style={{
            marginLeft: `${depth * 100}px`,
            backgroundColor: "red",
            height: "100px",
            width: "100px",
          }}
        >
          {node.name}
        </div>
        {children}
      </div>
    </div>
  );
};

export default DragItemY;
