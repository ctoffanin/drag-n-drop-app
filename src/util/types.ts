export type Status = 'todo' | 'busy' | 'done';

export type Todo = {
  id: number;
  title: string;
  status: Status;
};
