import { Link, NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { fetchLogoutUser } from "../../redux/thunks";

export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  // const userRole = useSelector((state) => state.user.loggedUser.role);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(fetchLogoutUser()).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="bg-blue-700 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center justify-between">
          <img
            className="mx-auto h-10 w-auto"
            src="./src/assets/_ce4843c4-f71a-420e-ad58-f6340ee54748.jpeg"
            alt="HarmonyCare Logo"
          />
          HarmonyCare Medical Center
        </div>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/doctorsaccount"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Doctors account
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/logout"
            onClick={handleLogout}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Logout
          </Link>
          <Outlet />
        </nav>
      </div>
    </div>
  );
}
