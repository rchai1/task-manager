# Task Manager

A React Task Manager application created for the Module 2 Frontend Development assignment.

The application allows users to add, view, filter, edit, delete, and reorder tasks. Task data is saved in the browser so that changes remain after the page is refreshed.

## Main Features

### Task Management

- Displays an initial list of six tasks
- Adds new tasks using a controlled form
- Displays the full details of an individual task
- Edits existing tasks from the task detail page
- Deletes tasks with a confirmation message
- Reorders tasks using native browser drag-and-drop
- Saves task changes in `localStorage`

### Task Information

Each task contains:

- ID
- Title
- Description
- Status
- Priority

Available status values:

- To Do
- In Progress
- Done

Available priority values:

- Low
- Medium
- High

### Filtering

Tasks can be filtered by:

- Status
- Priority

The status and priority filters work together.

The active status and priority filters are visually highlighted.

The application also displays the number of tasks currently shown:

```text
Showing X of Y tasks
```

### Add Task Form

The Add Task form contains:

- Title
- Description
- Status
- Priority

The Add Task button remains disabled until the required title and description fields contain valid text.

After a task is added:

- The title field is cleared
- The description field is cleared
- Status returns to To Do
- Priority returns to Medium
- The Add Task button becomes disabled again

### Delete Confirmation

Clicking the Delete button displays:

```text
Are you sure you want to delete this task?
```

Selecting Cancel keeps the task.

Selecting OK deletes the task.

The Delete button is placed outside the task detail link, so clicking it does not accidentally open the task detail page.

### Routing

The application includes the following routes:

| Route        | Purpose                          |
| ------------ | -------------------------------- |
| `/`          | Redirects to `/tasks`            |
| `/tasks`     | Displays the task list           |
| `/tasks/:id` | Displays the details of one task |

Entering an invalid task ID displays:

```text
Task not found
```

### Responsive Design

The application is designed to work on:

- Desktop screens
- Tablet screens
- Mobile screens

## Bonus Challenges Completed

The following bonus challenges were completed:

- Added a “Showing X of Y tasks” count
- Disabled the Add Task button when required fields are incomplete
- Saved tasks in `localStorage` so they remain after refreshing the page
- Added the `UPDATE_TASK` action and an inline edit form on the task detail page
- Added native browser drag-and-drop task reordering without installing a drag-and-drop library
- Added a priority filter that works together with the status filter

An additional delete confirmation feature was also included:

```text
Are you sure you want to delete this task?
```

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- React Context API
- `useReducer`
- `useContext`
- `useEffect`
- `useState`
- `localStorage`
- HTML5 native drag-and-drop
- CSS

## State Management

The application uses React Context and `useReducer` to manage and share task information across components.

The reducer supports the following actions:

- `ADD_TASK`
- `DELETE_TASK`
- `UPDATE_TASK`
- `SET_FILTER`
- `SET_PRIORITY_FILTER`
- `REORDER_TASKS`

The filtered task list is calculated from the complete task list and the selected filters. It is not stored as separate state.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── FilterBar.jsx
│   ├── AddTaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── EditTaskForm.jsx
├── context/
│   └── TaskContext.jsx
├── data/
│   └── initialTasks.js
├── pages/
│   ├── TaskListPage.jsx
│   └── TaskDetailPage.jsx
├── reducer/
│   └── taskReducer.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## How to Install and Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/rchai1/task-manager.git
```

### 2. Open the project folder

```bash
cd task-manager
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local address shown in the terminal, such as:

```text
http://localhost:5173/
```

Vite may use another port if port 5173 is already occupied.

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

Open the preview address shown in the terminal.

## Data Storage

Tasks are stored in the browser using `localStorage`.

This means that added, edited, deleted, and reordered tasks remain after refreshing or reopening the application in the same browser.

To restore the original six tasks, remove the following `localStorage` item:

```text
task-manager-tasks
```

This can be done from the browser Console using:

```javascript
localStorage.removeItem("task-manager-tasks");
location.reload();
```

## Screenshots

### Desktop View

![Task Manager desktop view](screenshots/task-list-desktop.png)

### Mobile View

![Task Manager mobile view](screenshots/task-list-mobile.png)

## AI Tool Usage

ChatGPT was used to support the development of this project.

It was used for:

- Explaining the assignment requirements
- Planning the project structure and development steps
- Generating and reviewing React code
- Explaining the code in plain language
- Troubleshooting errors
- Reviewing application features
- Guiding the testing process
- Preparing the README documentation

All submitted code was reviewed and tested by the student.

The student is responsible for understanding and being able to explain the submitted code.

## External Code Sources

No code was directly copied or adapted from external websites, tutorials, Stack Overflow answers, or GitHub repositories.

The application code was developed with assistance from ChatGPT, as declared in the AI Tool Usage section.

The official React and React Router documentation listed below was provided as reference material for the assignment.

## Reference Documentation

- [React: Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [React: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [React Router Documentation](https://reactrouter.com/)

## Repository

GitHub repository:

```text
https://github.com/rchai1/task-manager
```
