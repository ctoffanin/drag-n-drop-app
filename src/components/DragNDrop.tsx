import { useDragAndDrop } from '../hooks/useDragNDrop';
import { data } from '../util/data';
import { Status } from '../util/types';
import { CardsContainer } from './CardsContainer';

const statuses: Array<Status> = ['todo', 'busy', 'done'];

export const DragNDrop = () => {
  const { isDragging, todosList, handleDragging, handleUpdateList } =
    useDragAndDrop(data);
  return (
    <div className="grid">
      {statuses.map((status) => (
        <CardsContainer
          status={status}
          key={status}
          todos={todosList}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
