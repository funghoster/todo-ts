import { EFiltersTodo } from "../../types/filters";

export interface ITaskFilterProps {
  currentFilter: EFiltersTodo;
  setActiveFilter: (filter: EFiltersTodo) => void;
}
