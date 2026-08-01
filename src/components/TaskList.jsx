import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  const { tasks: allTasks, dispatch } = useContext(TaskContext);

  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const draggedTaskIdRef = useRef(null);

  function handleDragStart(event, taskId) {
    const taskIdAsText = String(taskId);

    draggedTaskIdRef.current = taskIdAsText;
    setDraggedTaskId(taskIdAsText);

    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", taskIdAsText);
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function handleDragEnter(event, targetTaskId) {
    event.preventDefault();

    const sourceTaskId = draggedTaskIdRef.current;
    const targetTaskIdAsText = String(targetTaskId);

    if (!sourceTaskId || sourceTaskId === targetTaskIdAsText) {
      return;
    }

    const sourceIndex = allTasks.findIndex(
      (task) => String(task.id) === sourceTaskId,
    );

    const targetIndex = allTasks.findIndex(
      (task) => String(task.id) === targetTaskIdAsText,
    );

    if (sourceIndex === -1 || targetIndex === -1) {
      return;
    }

    const reorderedTasks = [...allTasks];

    const [movedTask] = reorderedTasks.splice(sourceIndex, 1);

    reorderedTasks.splice(targetIndex, 0, movedTask);

    dispatch({
      type: "REORDER_TASKS",
      payload: reorderedTasks,
    });
  }

  function handleDrop(event) {
    event.preventDefault();

    draggedTaskIdRef.current = null;
    setDraggedTaskId(null);
  }

  function handleDragEnd() {
    draggedTaskIdRef.current = null;
    setDraggedTaskId(null);
  }

  if (tasks.length === 0) {
    return <p>No tasks match the selected filters.</p>;
  }

  return (
    <section>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isDragging={String(task.id) === draggedTaskId}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      ))}
    </section>
  );
}

export default TaskList;
