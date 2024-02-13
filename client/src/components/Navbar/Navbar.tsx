import { useEffect } from "react";
import { Link, NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCheckUserSession, fetchCheckRole, fetchLogoutUser } from "../../redux/thunks";

export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  
  const isAuthenticated = useAppSelector(
    (store) => store.userSlice.authUser.user
  );
  
  const role = useAppSelector(
    (store) => store.userSlice.roleUser.role
  );
  
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
    <div className="bg-blue-700 py-4 fixed top-0 w-full z-10" style={{opacity:"0.85"}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center justify-between">
          <img
            className="mx-auto h-12 w-auto"
            src="./src/assets/Logo without .png"
            alt="HarmonyCare Logo"
          />
          HarmonyCare Medical Center
        </div>
        <nav className="space-x-4">
          {isAuthenticated ? (
            <>
              {role === "admin" && (
                <>
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
                    to="/clientsaccount"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    Clients account
                  </Link>
                  <Link
                    to="/usercreation"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    Create account
                  </Link>
                </>
              )}
              {role === "patient" && (
                <>
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    Clients account
                  </Link>
                </>
              )}
              {role === "doctor" && (
                <>
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
                </>
              )}
              <Link
                to="/logout"
                onClick={handleLogout}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
          <Outlet />
        </nav>
      </div>
    </div>
  );
}
