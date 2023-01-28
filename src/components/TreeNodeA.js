import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const TreeNode = ({ data, index, moveNode }) => {
    
  const [isExpanded, setIsExpanded] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'tree-node', index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const [{ isOver }, drop] = useDrop({
    accept: 'tree-node',
    hover: (item, monitor) => {
      if (!isDragging) {
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        moveNode(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });
  return (
    <div ref={drop}>
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div onClick={() => setIsExpanded(!isExpanded)}>
          {data.name}
        </div>
        {isExpanded && data.children && data.children.map((child, i) => (
          <TreeNode key={i} data={child} index={i} moveNode={moveNode} />
        ))}
      </div>
    </div>
  );
};

export default TreeNode;