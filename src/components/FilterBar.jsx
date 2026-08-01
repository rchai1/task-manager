import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const statusOptions = [
  { label: "All", value: "all" },
  { label: "To Do", value: "todo" },
  { label: "In Progress", value: "in-progress" },
  { label: "Done", value: "done" },
];

const priorityOptions = [
  { label: "All", value: "all" },
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

function FilterBar() {
  const { filter, priorityFilter, dispatch } = useContext(TaskContext);

  function handleStatusFilter(status) {
    dispatch({
      type: "SET_FILTER",
      payload: status,
    });
  }

  function handlePriorityFilter(priority) {
    dispatch({
      type: "SET_PRIORITY_FILTER",
      payload: priority,
    });
  }

  return (
    <section>
      <div>
        <h2>Filter by status</h2>

        {statusOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleStatusFilter(option.value)}
            aria-pressed={filter === option.value}
            style={{
              fontWeight: filter === option.value ? "bold" : "normal",
              textDecoration: filter === option.value ? "underline" : "none",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div>
        <h2>Filter by priority</h2>

        {priorityOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handlePriorityFilter(option.value)}
            aria-pressed={priorityFilter === option.value}
            style={{
              fontWeight: priorityFilter === option.value ? "bold" : "normal",
              textDecoration:
                priorityFilter === option.value ? "underline" : "none",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FilterBar;
