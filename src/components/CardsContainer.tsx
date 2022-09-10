import { DragEvent } from 'react';
import { Status, Todo } from '../util/types';
import { Card } from './Card';

type Props = {
  todos: Array<Todo>;
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
};

export const CardsContainer = ({
  todos = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const onDrop = (element: DragEvent<HTMLDivElement>) => {
    element.preventDefault();
    const id = Number(element.dataTransfer.getData('text'));
    handleUpdateList(id, status);
    handleDragging(false);
  };

  const onDragOver = (element: DragEvent<HTMLDivElement>) =>
    element.preventDefault();

  return (
    <div
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p>{status}</p>
      {todos.map(
        (todo) =>
          status === todo.status && (
            <Card data={todo} key={todo.id} handleDragging={handleDragging} />
          )
      )}
    </div>
  );
};
