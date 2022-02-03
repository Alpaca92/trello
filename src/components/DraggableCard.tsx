import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface DraggableCardProps {
  toDo: string;
  idx: number;
}

function DraggableCard({ toDo, idx }: DraggableCardProps) {
  console.log(toDo);
  return (
    <Draggable draggableId={toDo} index={idx} key={toDo}>
      {(provided) => (
        <Card
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
