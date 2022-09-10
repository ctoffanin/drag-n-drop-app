import { DragEvent } from 'react';
import { Todo } from '../util/types';

type Props = {
  data: Todo;
  handleDragging: (dragging: boolean) => void;
};

export const Card = ({ data, handleDragging }: Props) => {
  const { id, title } = data;
  const onDragStart = (element: DragEvent<HTMLDivElement>) => {
    element.dataTransfer.setData('text', `${id}`);
    handleDragging(true);
  };

  const onDragEnd = () => handleDragging(false);

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <p>{title}</p>
    </div>
  );
};
