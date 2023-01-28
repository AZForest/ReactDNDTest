import React from "react";
import DragItemX from "../components/DragItemX";

const LeftList = ({ list, setList }) => {
  return (
    <div
      style={{
        backgroundColor: "gainsboro",
        height: "400px",
        width: "200px",
        marginLeft: "100px",
      }}
    >
      {list.map((item, i) => {
        return <DragItemX key={i} node={item} />;
      })}
    </div>
  );
};

export default LeftList;
