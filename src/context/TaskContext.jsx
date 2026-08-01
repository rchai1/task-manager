import { createContext, useEffect, useReducer } from "react";
import { initialTasks } from "../data/initialTasks";
import { taskReducer } from "../reducer/taskReducer";

const STORAGE_KEY = "task-manager-tasks";

// This context is intentionally exported together with TaskProvider.
// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext(null);

const initialState = {
  tasks: initialTasks,
  filter: "all",
  priorityFilter: "all",
};

function loadInitialState(defaultState) {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return defaultState;
    }

    const parsedTasks = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return defaultState;
    }

    return {
      ...defaultState,
      tasks: parsedTasks,
    };
  } catch (error) {
    console.error("Unable to load tasks from localStorage:", error);
    return defaultState;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState,
    loadInitialState,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  }, [state.tasks]);

  const filteredTasks = state.tasks.filter((task) => {
    const matchesStatus =
      state.filter === "all" || task.status === state.filter;

    const matchesPriority =
      state.priorityFilter === "all" || task.priority === state.priorityFilter;

    return matchesStatus && matchesPriority;
  });

  const contextValue = {
    tasks: state.tasks,
    filter: state.filter,
    priorityFilter: state.priorityFilter,
    filteredTasks,
    dispatch,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
}
