import { ITaskParam } from "../../types/todo";

export interface INewTskFormProps {
  createItem: (task: ITaskParam) => void;
}
