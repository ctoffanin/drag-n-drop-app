import { DragEvent } from 'react';
import { Data } from '../utils/interfaces';

type Props = {
  data: Data;
  handleDragging: (dragging: boolean) => void;
};

export const Card = ({ data, handleDragging }: Props) => {
  const onDragStart = (element: DragEvent<HTMLDivElement>) => {
    element.dataTransfer.setData('text', `${data.id}`);
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
      <p>{data.content}</p>
    </div>
  );
};
