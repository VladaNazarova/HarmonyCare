import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <nav className="space-x-4">
        <Link to="/"> Main </Link>
        <Link to="/register"> Registration </Link>
        <Link to="/login"> Login </Link>
        <Link to="/doctorsaccount"> Account </Link>
        <Outlet />
      </nav>
    </div>
  );
}
