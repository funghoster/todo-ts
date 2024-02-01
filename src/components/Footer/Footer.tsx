import TaskFilter from "../TaskFilters";

import "./Footer.css";
import { IFooterProps } from "./Footer.types";

const Footer = ({
  completeCount,
  onDeleteAllActive,
  setActiveFilter,
  currentFilter,
}: IFooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">{completeCount} items left</span>
      <TaskFilter
        setActiveFilter={(filter) => setActiveFilter(filter)}
        currentFilter={currentFilter}
      />
      <button className="clear-completed" onClick={onDeleteAllActive}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
