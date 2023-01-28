import React from "react";
import { useDrop } from "react-dnd";

const DragItemY = ({ node, list, setList, children, depth }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "stringType",
    drop: (item, monitor) => {
      console.log("DropNode:");
      console.log(node);
      //   console.log("DragItem");
      //   console.log(item);

      //const updateNode = list.find((item) => item.id === node.id);
      //   const updateNodeChildren = updateNode.children;
      //   updateNodeChildren.push(item);

      //   const newNode = [...item];
      //   newNode.children;
      item.id = Math.random();
      setTimeout(() => {
        setList([...list, node.children.push(item)]);
      }, 2000);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
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
  );
};

export default DragItemY;
