import { useDragAndDrop } from '../hooks/useDragNDrop';
import { data } from '../utils/data';
import { Status } from '../utils/types';
import { Cards } from './Cards';

const statuses: Array<Status> = ['todo', 'inprogress', 'done'];

export const DragNDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(data);
  return (
    <div className="grid">
      {statuses.map((status) => (
        <Cards
          status={status}
          key={status}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
