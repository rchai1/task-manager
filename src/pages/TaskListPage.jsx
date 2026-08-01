import { useContext } from "react";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";

function TaskListPage() {
  const { tasks, filteredTasks } = useContext(TaskContext);

  return (
    <main>
      <h1>Tasks</h1>

      <AddTaskForm />

      <FilterBar />

      <p>
        Showing {filteredTasks.length} of {tasks.length} tasks
      </p>

      <TaskList tasks={filteredTasks} />
    </main>
  );
}

export default TaskListPage;
