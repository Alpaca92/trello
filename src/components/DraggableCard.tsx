import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface DraggableCardProps {
  toDoId: number;
  toDoText: string;
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

function DraggableCard({ toDoId, toDoText, idx }: DraggableCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={idx} key={toDoId}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
