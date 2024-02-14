import { useEffect } from "react";
import { Link, NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCheckUserSession,
  fetchCheckRole,
  fetchLogoutUser,
} from "../../redux/thunks";
import "./Navbar.css";

export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(
    (store) => store.userSlice.authUser.user
  );

  const role = useAppSelector((store) => store.userSlice.roleUser.role);

  useEffect(() => {
    dispatch(fetchCheckUserSession());
    if (isAuthenticated) {
      dispatch(fetchCheckRole());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(fetchLogoutUser()).then(() => {
      navigate("/");
    });
  };

  return (
    <div
      className="py-4 fixed top-0 w-full z-10 navbar"
      style={{ opacity: "0.85" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <div className="text text-lg font-bold flex items-center justify-between logo-container">
            <img
              className="mx-auto h-12 w-auto"
              src="./src/assets/Logo without .png"
              alt="HarmonyCare Logo"
            />
            Harmony Care Medical Center
          </div>
        </a>
        <nav className="space-x-4">
          {isAuthenticated ? (
            <>
              {role === "admin" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    Doctors account
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    Clients account
                  </Link>
                  <Link
                    to="/usercreation"
                    className="text hover:text-white transition duration-300"
                  >
                    Create account
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    About us
                  </Link>
                </>
              )}
              {role === "patient" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    Clients account
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    About us
                  </Link>
                </>
              )}
              {role === "doctor" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    Doctors account
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    About us
                  </Link>
                </>
              )}
              <Link
                to="/logout"
                onClick={handleLogout}
                className="text hover:text-white transition duration-300"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text hover:text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text hover:text-white transition duration-300"
              >
                About us
              </Link>
              <Link
                to="/register"
                className="text hover:text-white transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text hover:text-white transition duration-300"
              >
                Login
              </Link>
            </>
          )}
          <Outlet />
        </nav>
      </div>
    </div>
  );
}
