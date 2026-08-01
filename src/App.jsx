import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TaskDetailPage from "./pages/TaskDetailPage";
import TaskListPage from "./pages/TaskListPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />

        <Route path="/tasks" element={<TaskListPage />} />

        <Route path="/tasks/:id" element={<TaskDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
