import { useState } from 'react';
import { Status, Todo } from '../util/types';

export const useDragAndDrop = (initialState: Array<Todo>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [todosList, setTodosList] = useState<Array<Todo>>(initialState);

  const handleUpdateList = (id: number, status: Status) => {
    let card = todosList.find((todo) => todo.id === id);

    if (card && card.status !== status) {
      card.status = status;
      if (Array.isArray(todosList)) {
        setTodosList((prev) => [
          card!,
          ...prev.filter((todo) => todo.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    todosList,
    handleUpdateList,
    handleDragging,
  };
};
