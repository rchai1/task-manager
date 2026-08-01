import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditTaskForm from "../components/EditTaskForm";
import { TaskContext } from "../context/TaskContext";

function TaskDetailPage() {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);

  const task = tasks.find((taskItem) => String(taskItem.id) === id);

  if (!task) {
    return (
      <main>
        <Link to="/tasks">← Back to tasks</Link>

        <h1>Task not found</h1>

        <p>The task you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main>
      <Link to="/tasks">← Back to tasks</Link>

      <h1>{task.title}</h1>

      {isEditing ? (
        <EditTaskForm
          task={task}
          onSave={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <section>
          <h2>Task details</h2>

          <p>
            <strong>Description:</strong> {task.description}
          </p>

          <p>
            <strong>Status:</strong> {task.status}
          </p>

          <p>
            <strong>Priority:</strong> {task.priority}
          </p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit Task
          </button>
        </section>
      )}
    </main>
  );
}

export default TaskDetailPage;
