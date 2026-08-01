import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/tasks">Task Manager</Link>
      </nav>
    </header>
  );
}

export default Header;
