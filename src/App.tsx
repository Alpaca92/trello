import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="first" index={0}>
                {(provided) => (
                  <li {...provided.draggableProps} ref={provided.innerRef}>
                    <span {...provided.dragHandleProps}>📌</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(provided) => (
                  <li {...provided.draggableProps} ref={provided.innerRef}>
                    <span {...provided.dragHandleProps}>📌</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
