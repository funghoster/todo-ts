import Task from "../Task";

import "./TaskList.css";
import { ITaskListProps } from "./TaskList.types";

const TaskList = ({
  dataList,
  onToggleCompleted,
  onDeleted,
}: ITaskListProps) => {
  const elements = dataList.map((item) => {
    let classCompleted = null;
    const { id, completed, label, timer } = item;
    if (completed) classCompleted = "completed";
    return (
      <li key={id} className={classCompleted}>
        <Task
          itemDescription={label}
          timer={timer}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleted={() => onDeleted(id)}
        />
        <input type="text" className="edit" defaultValue="Editing task"></input>
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
