import { DragEvent } from 'react';
import { Data } from '../utils/interfaces';
import { Status } from '../utils/types';
import { Card } from './Card';

type Props = {
  items: Array<Data>;
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
};

export const Cards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const onDrop = (element: DragEvent<HTMLDivElement>) => {
    element.preventDefault();
    const id = +element.dataTransfer.getData('text');
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
      {items.map(
        (item) =>
          status === item.status && (
            <Card data={item} key={item.id} handleDragging={handleDragging} />
          )
      )}
    </div>
  );
};
