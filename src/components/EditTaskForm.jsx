import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function EditTaskForm({ task, onSave, onCancel }) {
  const { dispatch } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
  });

  const isFormIncomplete =
    formData.title.trim() === "" || formData.description.trim() === "";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isFormIncomplete) {
      return;
    }

    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id: task.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        status: formData.status,
        priority: formData.priority,
      },
    });

    onSave();
  }

  return (
    <section>
      <h2>Edit task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edit-title">Title</label>
          <input
            id="edit-title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="edit-description">Description</label>
          <textarea
            id="edit-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="edit-status">Status</label>
          <select
            id="edit-status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div>
          <label htmlFor="edit-priority">Priority</label>
          <select
            id="edit-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" disabled={isFormIncomplete}>
          Save Changes
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </section>
  );
}

export default EditTaskForm;
