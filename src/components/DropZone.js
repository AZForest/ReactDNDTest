import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DropItem from "./DropItem";

const DropZone = () => {
  //   const [{ isOver }, drop] = useDrop(() => ({
  //     accept: "stringType",
  //     drop: (item) => {
  //       console.log(item.id);
  //       console.log(data);
  //       const newData = data;
  //       newData.push(item);
  //       setData(newData);
  //     },
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver(),
  //     }),
  //   }));
  const [dropList, setDropList] = useState([
    { id: 4, name: "item4", children: [], depth: 0 },
  ]);

  return (
    <div
      style={{
        backgroundColor: "gainsboro",
        height: "400px",
        width: "200px",
        marginLeft: "100px",
      }}
      //   ref={drop}
    >
      {dropList.map((item, i) => {
        return (
          <DropItem
            key={i}
            entity={item}
            data={dropList}
            setData={setDropList}
          />
        );
      })}
    </div>
  );
};

export default DropZone;
