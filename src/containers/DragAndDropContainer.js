import React, { useState } from "react";
import LeftList from "./LeftList";
import RightList from "./RightList";

const DragAndDropContainer = () => {
  const [leftData, setLeftData] = useState([
    { id: 1, name: "item1", children: [] },
    { id: 2, name: "item2", children: [] },
    { id: 3, name: "item3", children: [] },
  ]);
  const [rightData, setRightData] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <LeftList list={leftData} setList={setLeftData} />
      <RightList
        list={rightData}
        setList={setRightData}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default DragAndDropContainer;
