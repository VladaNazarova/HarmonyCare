import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { doctorType } from "../../types/types";
import InputMask from "react-input-mask";
import { fetchAddDoc } from "../../redux/thunks";

export default function ClientCreation() {
  const [regDoc, setRegDoc] = useState<doctorType>({
    email: "",
    login: "",
    phone_number: "",
    password: "",
    role: "",
    doctor_id: 0,
    specialization: "",
    experience: 0,
    img: "",
  });
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value, files } = e.target;
    if (name === "img" && files) {
      const file = files[0];
      setRegDoc((prev) => ({ ...prev, img: file }));
    } else {
      setRegDoc({ ...regDoc, [name]: value });
    }
  };

  const handleRegisterDoc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", regDoc.email);
    data.append("login", regDoc.login);
    data.append("phone_number", regDoc.phone_number);
    data.append("password", regDoc.password);
    data.append("role", regDoc.role);
    data.append("specialization", regDoc.specialization);
    data.append("experience", String(regDoc.experience));
    data.append("img", regDoc.img);
    data.append("doctor_id", String(regDoc.doctor_id));
    dispatch(fetchAddDoc(data)).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Create account for employee
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegisterDoc} className="space-y-6" encType="multipart/form-data">
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
                value={regDoc.email}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="1@1.COM"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={regDoc.login}
                name="login"
                type="text"
                autoComplete="login"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Phone number
            </label>
            <div className="mt-2">
              <InputMask
                mask="+99 999 999 9999"
                maskChar=" "
                onChange={handleChange}
                value={regDoc.phone_number}
                name="phone_number"
                type="text"
                autoComplete="phone_number"
                placeholder="+XX (XXX) XXX-XXXX"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={regDoc.password}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Role
              </label>
            </div>
            <div className="mt-2">
              <select
                onChange={handleChange}
                value={regDoc.role}
                name="role"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="specialization"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Specialization
              </label>
            </div>
            <div className="mt-2">
              <select
                onChange={handleChange}
                value={regDoc.specialization}
                name="specialization"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a specialization</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dietetics">Dietetics</option>
                <option value="Surgery">Surgery</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Neurology">Neurology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Oncology">Oncology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Urology">Urology</option>
                <option value="Ophthalmology">Ophthalmology</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="experience"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Experience
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={regDoc.experience}
                name="experience"
                type="number"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Photo
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                // value={regDoc.img}
                name="img"
                type="file"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="doctor_id"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Doctors id
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={regDoc.doctor_id}
                name="doctor_id"
                type="number"
                required
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-900 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
