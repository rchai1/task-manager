import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTaskForm() {
  const { dispatch } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
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

    const newTask = {
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status,
      priority: formData.priority,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
    });
  }

  return (
    <section>
      <h2>Add a new task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
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
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
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
          Add Task
        </button>
      </form>
    </section>
  );
}

export default AddTaskForm;
