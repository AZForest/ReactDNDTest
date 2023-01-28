import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DropItem = ({ entity, data, setData }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "stringType",
    item: data,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "stringType",
    drop: (item, monitor) => {
      //console.log(entity);

      const toUpdate = data.find((z) => z.id === entity.id);
      toUpdate.children.push(item);
      item.depth = entity.depth + 1;
      console.log(item);

      console.log(data);
      setData([...data, toUpdate]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: "red",
        height: "100px",
        width: "100px",
        margin: "10px auto",
        paddingLeft: `${entity.depth * 100}px`,
      }}
    >
      {entity.name}
      {entity.depth}
    </div>
  );
};

export default DropItem;
