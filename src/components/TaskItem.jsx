import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

function TaskItem({
  task,
  isDragging,
  onDragStart,
  onDragOver,
  onDragEnter,
  onDrop,
  onDragEnd,
}) {
  const { dispatch } = useContext(TaskContext);

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) {
      return;
    }

    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });
  }

  return (
    <article
      draggable
      onDragStart={(event) => onDragStart(event, task.id)}
      onDragOver={onDragOver}
      onDragEnter={(event) => onDragEnter(event, task.id)}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      aria-grabbed={isDragging}
      title="Drag this task to change its position"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      <Link to={`/tasks/${task.id}`}>
        <div>
          <h2>{task.title}</h2>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
        </div>
      </Link>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </article>
  );
}

export default TaskItem;
