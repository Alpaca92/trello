import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface DraggableCardProps {
  toDo: string;
  idx: number;
}

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

function DraggableCard({ toDo, idx }: DraggableCardProps) {
  console.log(toDo);
  return (
    <Draggable draggableId={toDo} index={idx} key={toDo}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
