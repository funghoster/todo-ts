import { ITodo } from "../../types/todo";

export interface ITaskListProps {
  dataList: ITodo[];
  onToggleCompleted: (id: number) => void;
  onDeleted: (id: number) => void;
}
