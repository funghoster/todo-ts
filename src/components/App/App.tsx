import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskList from "../TaskList";
import NewTaskForm from "../NewTaskForm";
import Footer from "../Footer";

import "./App.css";
import { ITaskParam, ITodo } from "../../types/todo";
import { EFiltersTodo } from "../../types/filters";

const App = () => {
  const [todoData, setTodoData] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<EFiltersTodo>(EFiltersTodo.all);

  const todoItem = (task: ITaskParam): ITodo => {
    return {
      id: uuidv4(),
      label: task.label,
      completed: false,
      editing: false,
      timer: {
        min: Number(task.min),
        sec: Number(task.sec),
      },
    };
  };

  const createNewItem = (task: ITaskParam) => {
    const newItem = todoItem(task);
    setTodoData((data) => {
      return [...data, newItem];
    });
  };

  const toggleCompletedItem = (id: number) => {
    setTodoData((data) => {
      const index = data.findIndex((el) => el.id === id);
      data[index].completed = !data[index].completed;
      return [...data];
    });
  };

  const deletedItem = (id: number) => {
    setTodoData((data) => {
      const index = data.findIndex((el) => el.id === id);
      data.splice(index, 1);
      return [...data];
    });
  };

  const deleteAllActive = () => {
    setTodoData((data) => {
      const delCopy = data.filter((el) => !el.completed);
      return [...delCopy];
    });
  };

  const setActiveFilter = (filter: EFiltersTodo) => {
    setFilter(filter);
  };

  function filterItems(filter: EFiltersTodo, data: ITodo[]) {
    switch (filter) {
      case EFiltersTodo.all:
        return data;

      case EFiltersTodo.active:
        return data.filter((item) => !item.completed);

      case EFiltersTodo.completed:
        return data.filter((item) => item.completed);
    }
  }
  const itemsLeftCount = todoData.filter((el) => !el.completed).length;
  const visibleItems = filterItems(filter, todoData);
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm createItem={createNewItem} />
      </header>
      <section className="main">
        <TaskList
          dataList={visibleItems}
          onToggleCompleted={toggleCompletedItem}
          onDeleted={deletedItem}
        />
        <Footer
          completeCount={itemsLeftCount}
          onDeleteAllActive={deleteAllActive}
          setActiveFilter={setActiveFilter}
          currentFilter={filter}
        />
      </section>
    </section>
  );
};

export default App;
