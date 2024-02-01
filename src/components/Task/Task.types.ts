import { ITimer } from "../../types/todo";

export interface ITaskProps {
  onDeleted: () => void;
  onToggleCompleted: () => void;
  itemDescription: string;
  timer: ITimer;
}
