import React, { useState } from "react";
import { DragDropContext, Draggable, Dropable } from '@hello-pangea/dnd';

const App = () => {
  const initialTodos = [
    { id: 1, text: "Aprender React" },
    { id: 2, text: "Aprender Js" },
    { id: 3, text: "Aprender Value" },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (

    <DragDropContext>
      <h1>Drag & Drop</h1>
      <Dropable droppableId="droppable-1">
        {
          () => {
            <ul
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}>
              {todos.map((todo) => {
                <Draggable key={todo.id} draggableId={(`${todo.id}`)}index={index}>
                  {
                    ()=>{
                      <li>
                    {todo.id}-{todo.text}
                  </li>
                  }}
                </Draggable>
              })}
            </ul>
          }
        }
      </Dropable>
    </DragDropContext>
  );
};

export default App;