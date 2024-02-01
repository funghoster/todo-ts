import { EFiltersTodo, IFilterButton } from "../../types/filters";
import { ITaskFilterProps } from "./TaskFilter.types";
import "./TaskFilters.css";

const statusButton: IFilterButton[] = [
  { filter: EFiltersTodo.all, label: "All" },
  { filter: EFiltersTodo.active, label: "Active" },
  { filter: EFiltersTodo.completed, label: "Completed" },
];

const TaskFilters = ({ setActiveFilter, currentFilter }: ITaskFilterProps) => {
  const buttons = statusButton.map(({ filter, label }) => {
    const thisFilter = filter === currentFilter;
    return (
      <li key={filter}>
        <button
          className={`filters__button ${
            thisFilter && "filters__button--selected"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttons}</ul>;
};

export default TaskFilters;
