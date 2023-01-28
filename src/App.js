import logo from "./logo.svg";
import "./App.css";
import Tree from "./components/Tree";
import Tree2 from "./components/Tree2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import SideBar from "./components/SideBar";
import DropZone from "./components/DropZone";
import DragAndDropContainer from "./containers/DragAndDropContainer";

function App() {
  // const data = {
  //   id: 1,
  //   name: "Root node",
  //   parent: null,
  //   children: [
  //     {
  //       id: 2,
  //       name: "Child node 1",
  //       parent: 1,
  //       children: [
  //         {
  //           id: 4,
  //           name: "Grandchild node 1",
  //           parent: 2,
  //           children: [],
  //         },
  //         {
  //           id: 5,
  //           name: "Grandchild node 2",
  //           parent: 2,
  //           children: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: "Child node 2",
  //       parent: 1,
  //       children: [],
  //     },
  //   ],
  // };

  const data2 = [
    {
      id: 1,
      label: "Node 1",
      parent: null,
      children: [
        {
          id: 2,
          label: "Node 1.1",
          parent: 1,
          children: [
            {
              id: 3,
              label: "Node 1.1.1",
              parent: 2,
              children: [],
            },
            {
              id: 4,
              label: "Node 1.1.2",
              parent: 2,
              children: [
                {
                  id: 5,
                  label: "Node 1.1.2.1",
                  parent: 4,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          label: "Node 1.2",
          parent: 1,
          children: [],
        },
      ],
    },
    {
      id: 7,
      label: "Node 2",
      parent: null,
      children: [],
    },
  ];

  const [list, setList] = useState([
    { id: 1, name: "item1", children: [], depth: 0 },
    { id: 2, name: "item2", children: [], depth: 0 },
    { id: 3, name: "item3", children: [], depth: 0 },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          {/* <Tree2 data={data2} /> */}
          {/* <div style={{ display: "flex" }}>
            <SideBar data={list} />
            <DropZone />
          </div> */}
          <DragAndDropContainer />
        </header>
      </div>
    </DndProvider>
  );
}

export default App;
