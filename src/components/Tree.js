import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const TreeNode = ({ node, onClick, onMove }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const [{ isDragging }, drag] = useDrag({
    item: {  id: node.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    type: "node",
  });

  const [, drop] = useDrop({
    accept: "node",
    drop: (item) => {
      onMove(item.id, node.id);
    },
    hover: (item) => {
      // do something when an item is hovered over this node
    },
  });

  return (
    <div ref={(node) => drop(drag(node))} >
      <div onClick={onClick} style={{backgroundColor: "silver", height: "100px", margin: "10px"}}>{node.name}</div>
      {isExpanded &&
        node.children.map((child) => (
          <TreeNode
            node={child}
            key={child.id}
            onClick={onClick}
            onMove={onMove}
          />
        ))}
    </div>
  );
};

const Tree = ({ data }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [treeData, setTreeData] = useState(data);

  const handleClick = (node) => {
    setSelectedNode(node);
  };

  const moveNode = (id, parentId) => {
    // Find the node with the given id
    const nodeToMove = findNode(treeData, id);
    // Find the parent node with the given parentId
    const parentNode = findNode(treeData, nodeToMove.parent);

    console.log(nodeToMove);
    console.log(parentNode);
    // Remove the node from its current parent's children array
    parentNode.children = parentNode.children.filter(
      (node) => node.id !== id
    );

    // Set the node's new parent
    nodeToMove.parent = parentNode;

    // Add the node to the new parent's children array
    parentNode.children.push(nodeToMove);

    // Update the treeData object and re-render the tree
    setTreeData({ ...treeData });
  };

  return (
    <div>
      <TreeNode node={treeData} onClick={handleClick} onMove={moveNode} />
      <div>Selected node: {selectedNode && selectedNode.name}</div>
    </div>
  );
};

// Helper function to find a node with a given id
const findNode = (node, id) => {
  if (node.id === id) {
    return node;
  }
  for (let i = 0; i < node.children.length; i++) {
    const foundNode = findNode(node.children[i], id);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
};

export default Tree;

