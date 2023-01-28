import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Tree3Node = ({ id, label, children }) => {};

const Tree3 = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  const renderTree = (nodes, depth = 0) => {
    return nodes.map((node, i) => {
      <Tree3Node key={i} label={node.label}>
        {node.children && renderTree(node.children, depth + 1)}
      </Tree3Node>;
    });
  };
  return <div>{renderTree(treeData)}</div>;
};

export default Tree3;
