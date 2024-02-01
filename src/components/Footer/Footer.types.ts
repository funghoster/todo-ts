import { EFiltersTodo } from "../../types/filters";

export interface IFooterProps {
  completeCount: number;
  onDeleteAllActive: () => void;
  setActiveFilter: (filter: EFiltersTodo) => void;
  currentFilter: EFiltersTodo;
}
