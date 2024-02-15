import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { fetchLoginUser } from "../../redux/thunks";
import { useAppDispatch } from "../../redux/hooks";
import ErrorModal from "../Modal/Modal";

export default function Login() {
  const navigate: NavigateFunction = useNavigate();
  const [auth, setAuth] = useState({ email: "", password: "" });
  const [error1, setError1] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLoginUser(auth))
    .unwrap()
    .then((action) => {
      if(action.error) {
        setError1(action.error);
      } else {
        navigate("/");
      }
    }).catch(() => {
      setError1("An error occurred while registering.");
    });
  };
  const closeModal = () => {
    setError1("");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-15 w-auto" style={{ maxHeight: '200px' }}
          src="./src/assets/_ce4843c4-f71a-420e-ad58-f6340ee54748.jpeg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleAuth} className="space-y-6">
        {error1 && <ErrorModal error={error1} onClose={closeModal} />}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={auth.email}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                 href="/forgotpassword"
                  className="font-semibold text-cyan-900"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={auth.password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
