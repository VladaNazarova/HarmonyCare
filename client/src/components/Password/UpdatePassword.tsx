import axios from "axios";
import React, { useState } from "react";
// import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
type PropsPasswordType = {
  password: string;
  repeatPassword: string;
};

export default function UpdatePassword(): JSX.Element {
  const { token } = useParams();
  const [passwordInput, setPasswordInput] = useState<PropsPasswordType>({
    password: "",
    repeatPassword: "",
  });
  // const navigate: NavigateFunction = useNavigate();

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordInput.password !== passwordInput.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:9000/recovery/resetpassword/${token}`,
        { password: passwordInput.password }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Password changed successfully");
        // navigate("/login");
        window.location.href="/login"
      } else {
        console.error("Error changing password");
      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please enter your new password
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New password
            </label>
            <div className="mt-2">
              <input
                onChange={handlePasswordChange}
                value={passwordInput.password}
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="repeatPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repeat password
            </label>
            <div className="mt-2">
              <input
                onChange={handlePasswordChange}
                value={passwordInput.repeatPassword}
                name="repeatPassword"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
