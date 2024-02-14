import React, { useEffect } from "react";
import { Link, NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCheckUserSession,
  fetchCheckRole,
  fetchLogoutUser,
} from "../../redux/thunks";
import "./Navbar.css";
import { setLanguage } from "../../redux/languageSlice";


export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const role = useAppSelector((store) => store.userSlice.roleUser.role);

  const isAuthenticated = useAppSelector(
    (store) => store.userSlice.authUser.user
  );
  const isLanguageEnglish = useAppSelector(
    (store) => store.languageSlice.change.changeLanguage
  );

  const handleLanguageChange = () => {
    dispatch(setLanguage(!isLanguageEnglish));
  };

  useEffect(() => {
    dispatch(fetchCheckUserSession());
    if (isAuthenticated) {
      dispatch(fetchCheckRole());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      dispatch(setLanguage(JSON.parse(savedLanguage)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(isLanguageEnglish));
  }, [isLanguageEnglish]);

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
          {isLanguageEnglish
            ? "HarmonyCare Medical Center"
            : "Медицинский центр HarmonyCare"}
        </div>
        <nav className="space-x-4">
          {isAuthenticated ? (
            <>
              {role === "admin" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Home" : "Главная"}
                  </Link>
                  <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Doctors account" : "Аккаунт врачей"}
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Clients account" : "Аккаунт клиентов"}
                  </Link>
                  <Link
                    to="/usercreation"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Create account" : "Создать аккаунт"}
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "About us" : "О нас"}
                  </Link>
                </>
              )}
              {role === "patient" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Home" : "Главная"}
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Clients account" : "Аккаунт клиентов"}
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "About us" : "О нас"}
                  </Link>
                </>
              )}
              {role === "doctor" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Home" : "Главная"}
                  </Link>
                  <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "Doctors account" : "Аккаунт врачей"}
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "About us" : "О нас"}
                  </Link>
                </>
              )}
              <Link
                to="/logout"
                onClick={handleLogout}
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "Logout" : "Выйти"}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "Home" : "Главная"}
              </Link>
              <Link
                to="/about"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "About us" : "О нас"}
              </Link>
              <Link
                to="/register"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "Register" : "Регистрация"}
              </Link>
              <Link
                to="/login"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "Login" : "Войти"}
              </Link>
            </>
          )}
          <button
            onClick={handleLanguageChange}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {isLanguageEnglish ? "Change language" : "Сменить язык"}
          </button>

          <Outlet />
        </nav>
      </div>
    </div>
  );
}
