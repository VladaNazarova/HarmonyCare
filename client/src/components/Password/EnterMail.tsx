import axios from "axios";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type PropsEmailInputType = {
  email: string;
};

export default function EnterMail(): JSX.Element {
  const [emailInput, setEmailInput] = useState<PropsEmailInputType>({
    email: "",
  });
  const navigate: NavigateFunction = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/recovery/sendmail",
        { email: emailInput.email }
      );
      if (response.status === 200) {
        console.log("Email sent successfully");
        navigate("/");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
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
          Please enter your email to recover password
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSend} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmailChange}
                value={emailInput.email}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="1@1.COM"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="py-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
            >
              Send recovery email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
