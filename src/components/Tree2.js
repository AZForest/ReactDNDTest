import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const TreeNode = ({ id, label, children, moveNode2, findNode, depth = 0 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [collected, drag, preview] = useDrag({
    // item: { id, depth, index: findNode(id).index },
    item: { id, depth },
    type: "TREE_NODE",
    // begin: () => setIsDragging(true),
    end: () => setIsDragging(false),
  });
  const [, drop] = useDrop({
    accept: "TREE_NODE",
    // drop: (item) => moveNode(item.index, findNode(id).index, item.depth),
    drop: (item) => moveNode2(item.id, id, item.depth),
    hover: (item) => {
      // console.log("Hover...");
      // console.log(item);
      if (item.id === id) return;
      // const { index: hoverIndex } = findNode(id);
      // const { index: dragIndex } = findNode(item.id);
      // const { id: hoverId } = findNode(id);
      // const { id: dragId } = findNode(item.id);
      // console.log("HoverID " + hoverId);
      // console.log("DragID " + dragId);

      // if (dragIndex < hoverIndex && item.depth === depth) {
      //   moveNode(dragIndex, hoverIndex - 1, depth);
      //   item.index = hoverIndex - 1;
      // } else {
      //   moveNode(dragIndex, hoverIndex, depth);
      //   item.index = hoverIndex;
      // }
    },
  });
  return (
    <div ref={(node) => drag(drop(node))}>
      <div style={{ paddingLeft: `${depth * 100}px`, margin: "10px" }}>
        {label}
      </div>
      {children}
    </div>
  );
};

const Tree = ({ data }) => {
  const [treeData, setTreeData] = useState(data);
  const findNode = (id) => {
    //console.log("Find....");
    let result = {};
    const search = (nodes) => {
      for (let node of nodes) {
        if (node.id === id) {
          result = node;
          return;
        } else if (node.children) {
          search(node.children);
        }
      }
    };
    search(treeData);
    return result;
  };
  const findNode2 = (tree, id) => {
    //console.log("Find....");
    let result = {};
    const search = (nodes) => {
      for (let node of nodes) {
        if (node.id === id) {
          result = node;
          return;
        } else if (node.children) {
          search(node.children);
        }
      }
    };
    search(tree);
    return result;
  };
  const moveNode = (dragIndex, hoverIndex, depth) => {
    console.log("Move...");
    console.log("DragIndex... " + dragIndex);
    console.log("hoverIndex.... " + hoverIndex);
    console.log("Depth... " + depth);
    const dragNode = treeData[dragIndex];
    // setTreeData(
    //   treeData
    //     .slice(0, dragIndex)
    //     .concat(treeData.slice(dragIndex + 1, treeData.length))
    //     .slice(0, hoverIndex)
    //     .concat(dragNode)
    //     .concat(treeData.slice(hoverIndex, treeData.length))
    // );
  };

  const moveNode2 = (dragId, hoverId) => {
    const treeCopy = [...treeData];

    // console.log("dragId " + dragId);
    // console.log("hoverId " + hoverId);
    // const hoverNode = findNode(hoverId);
    // console.log("Hover Node: ");
    // console.log(hoverNode);
    // console.log("-----");
    // let hoverParent = findNode(hoverNode.parent);
    // console.log("Hover Parent: ");
    // console.log(hoverParent);
    // console.log("------");
    // console.log("Hover Parent Children: ");
    // console.log(hoverParent.children);
    // console.log("------");

    // const dragNode = findNode(dragId);
    // console.log("DragNode: ");
    // console.log(dragNode);
    // console.log("-------");
    // const parentExists = dragNode.parent === null ? false : true;
    // dragNode.parent = hoverNode.id;

    // const hoverNodeChildren = hoverNode.children;
    // hoverNodeChildren.push(dragNode);
    // hoverNode.children = hoverNodeChildren;

    // if (parentExists) {
    //   const dragNodeParent = findNode(dragNode.parent);
    //   console.log("DragParent: ");
    //   console.log(dragNodeParent);
    //   console.log("------");
    //   console.log("DragNodeParent Children: ");
    //   console.log(dragNodeParent.children);
    //   console.log("------");

    //   const dragNodeParentChildren = dragNodeParent.children;
    //   const dragNodeParentChildrenFiltered = dragNodeParentChildren.filter(
    //     (node) => node.id !== dragId
    //   );
    //   dragNodeParent.children = dragNodeParentChildrenFiltered;
    // }

    const updatedTree = updateTree(treeCopy, dragId, hoverId);
    console.log("ACTUAL TREE");
    console.log("xxxxxxxxxxx");
    console.log(updatedTree);
    console.log("xxxxxxxxxxx");
    setTreeData(updatedTree);
  };

  const updateTree = (tree, dragId, hoverId) => {
    console.log("dragId " + dragId);
    console.log("hoverId " + hoverId);
    const hoverNode = findNode2(tree, hoverId);
    console.log("Hover Node: ");
    console.log(hoverNode);
    console.log("-----");
    let hoverParent = findNode2(tree, hoverNode.parent);
    console.log("Hover Parent: ");
    console.log(hoverParent);
    console.log("------");
    console.log("Hover Parent Children: ");
    console.log(hoverParent.children);
    console.log("------");

    const dragNode = findNode2(tree, dragId);
    console.log("DragNode: ");
    console.log(dragNode);
    console.log("-------");
    const parentExists = dragNode.parent === null ? false : true;
    dragNode.parent = hoverNode.id;

    const hoverNodeChildren = hoverNode.children;
    hoverNodeChildren.push(dragNode);
    hoverNode.children = hoverNodeChildren;

    if (parentExists) {
      const dragNodeParent = findNode2(tree, dragNode.parent);
      console.log("DragParent: ");
      console.log(dragNodeParent);
      console.log("------");
      console.log("DragNodeParent Children: ");
      console.log(dragNodeParent.children);
      console.log("------");

      const dragNodeParentChildren = dragNodeParent.children;
      const dragNodeParentChildrenFiltered = dragNodeParentChildren.filter(
        (node) => node.id !== dragId
      );
      dragNodeParent.children = dragNodeParentChildrenFiltered;
    }

    return tree;
  };

  const renderTree = (nodes, depth = 0) => {
    return nodes.map((node, index) => {
      //console.log(node.children);
      return (
        <TreeNode
          key={node.id}
          id={node.id}
          label={node.label}
          depth={depth}
          moveNode2={moveNode2}
          findNode={findNode}
        >
          {node.children.length > 0 ? renderTree(node.children, depth + 1) : ""}
        </TreeNode>
      );
    });
  };
  return <div>{renderTree(treeData)}</div>;
};

export default Tree;
