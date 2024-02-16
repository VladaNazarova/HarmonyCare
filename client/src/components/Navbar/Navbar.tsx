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
              className="mx-auto h-12 w-auto mt-2"
              src="./src/assets/justlogo.png"
              alt="HarmonyCare Logo"
            />
            {isLanguageEnglish
              ? "HARMONYCARE MEDICAL CENTER"
              : "МЕДИЦИНСКИЙ ЦЕНТР HARMONYCARE"}
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
                    {isLanguageEnglish ? "HOME" : "НА ГЛАВНУЮ"}
                  </Link>
                  {/* <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "DOCTOR" : "ВРАЧ"}
                  </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "CLIENT" : "ПАЦИЕНТ"}
                  </Link> */}
                  <Link
                    to="/usercreation"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "CREATE ACCOUNT" : "СОЗДАТЬ АККАУНТ"}
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "ABOUT" : "О НАС"}
                  </Link>
                  <Link
                to="/testnews"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "NEWS" : "НОВОСТИ"}
              </Link>
                </>
              )}
              {role === "patient" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "HOME" : "НА ГЛАВНУЮ"}
                  </Link>
                  <Link
                to="/testnews"
                className="text hover:text-white transition duration-300"
              >

                {isLanguageEnglish ? "NEWS" : "НОВОСТИ"}
              </Link>
                  <Link
                    to="/clientsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "MY ACCOUNT" : "ЛИЧНЫЙ КАБИНЕТ"}
                  </Link>
                  
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "ABOUT" : "О НАС"}
                  </Link>
                </>
              )}
              {role === "doctor" && (
                <>
                  <Link
                    to="/"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "HOME" : "НА ГЛАВНУЮ"}
                  </Link>
                  <Link
                to="/testnews"
                className="text hover:text-white transition duration-300"
              >

                {isLanguageEnglish ? "NEWS" : "НОВОСТИ"}
              </Link>
                  <Link
                    to="/doctorsaccount"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "MY ACCOUNT" : "ЛИЧНЫЙ КАБИНЕТ"}
                  </Link>
                  <Link
                    to="/about"
                    className="text hover:text-white transition duration-300"
                  >
                    {isLanguageEnglish ? "ABOUT" : "О НАС"}
                  </Link>
                </>
              )}
              <Link
                to="/logout"
                onClick={handleLogout}
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "LOG OUT" : "ВЫЙТИ"}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "HOME" : "НА ГЛАВНУЮ"}
              </Link>
              <Link
                to="/about"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "ABOUT" : "О НАС"}
              </Link>
              <Link
                to="/testnews"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "NEWS" : "НОВОСТИ"}
              </Link>
              <Link
                to="/register"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "SIGN UP" : "ЗАРЕГИСТРИРОВАТЬСЯ"}
              </Link>
              <Link
                to="/login"
                className="text hover:text-white transition duration-300"
              >
                {isLanguageEnglish ? "LOG IN" : "ВОЙТИ"}
              </Link>
            </>
          )}
          <button
            onClick={handleLanguageChange}
            className="text hover:text-white transition duration-300"
          >
            {isLanguageEnglish ? "CHANGE LANGUAGE" : "СМЕНИТЬ ЯЗЫК"}
          </button>

          <Outlet />
        </nav>
      </div>
    </div>
  );
}
