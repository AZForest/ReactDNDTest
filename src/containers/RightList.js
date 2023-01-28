import React from "react";
import DragItemY from "../components/DragItemY";

const RightList = ({ list, setList }) => {
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
