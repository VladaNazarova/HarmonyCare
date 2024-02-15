import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { userType } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";
import { fetchAddUser } from "../../redux/thunks";
import InputMask from "react-input-mask";
import ErrorModal from "../Modal/Modal";

export default function Registration() {
  const [reg, setReg] = useState<userType>({
    email: "",
    login: "",
    password: "",
    phone_number: "",
  });
  const [error, setError] = useState<string>("");
  console.log(error);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchAddUser(reg))
      .unwrap()
      .then((action) => {
        if (action.error) {
          setError(action.error);
        } else {
          navigate("/");
        }
      })
      .catch(() => {
        setError("An error occurred while registering.");
      });
  };

  const closeModal = () => {
    setError("");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-15 w-auto"
          style={{ maxHeight: "200px" }}
          src="./src/assets/_ce4843c4-f71a-420e-ad58-f6340ee54748.jpeg"
          alt="HarmonyCare Logo"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Please sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} className="space-y-6">
          {error && <ErrorModal error={error} onClose={closeModal} />}
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
                value={reg.email}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="example@example.com"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium leading-6"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={reg.login}
                name="login"
                type="text"
                autoComplete="login"
                required
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium leading-6"
            >
              Phone number
            </label>
            <div className="mt-2">
              <InputMask
                mask="+99(999)999-99-99"
                maskChar=" "
                onChange={handleChange}
                value={reg.phone_number}
                name="phone_number"
                type="text"
                autoComplete="phone_number"
                placeholder="+XX (XXX) XXX-XXXX"
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
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={reg.password}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="py-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-900 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
