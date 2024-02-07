import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
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
        </nav>
      </div>
    </div>
  );
}
