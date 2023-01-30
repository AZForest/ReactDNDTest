import React, { useState, useEffect } from "react";
import DragItemY from "../components/DragItemY";
import { useDrop } from "react-dnd";

const RightList = ({ list, setList }) => {
  const [counter, setCounter] = useState(0);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "stringType",
      drop: (item, monitor) => {
        // console.log(monitor.canDrop());
        // console.log(counter);
        //console.log(list);
        // const x = Math.random();
        // console.log(x);
        // setCounter(x);
        if (monitor.didDrop()) {
          return setList([...list]);
        }
        const newItem = { ...item };
        newItem.children = [];
        setList([...list, newItem]);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [list]
  );

  const renderList = (list, depth = 0) => {
    return list.map((item, i) => {
      return (
        <DragItemY
          key={i}
          node={item}
          list={list}
          setList={setList}
          depth={depth}
        >
          {item.children && renderList(item.children, depth + 1)}
        </DragItemY>
      );
    });
  };
  return (
    <div
      ref={drop}
      style={{
        backgroundColor: "gainsboro",
        height: "600px",
        width: "600px",
        marginLeft: "100px",
      }}
    >
      {/* {list.map((item, i) => {
        return <DragItemY key={i} node={item} list={list} setList={setList} />;
      })} */}
      {renderList(list)}
    </div>
  );
};

export default RightList;
