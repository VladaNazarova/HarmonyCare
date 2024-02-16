import { useState, useEffect, FormEvent, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import type { PatientType } from "../../types/types";
import axios from "axios";

interface PatientCardProps {
  patient: PatientType;
  removePatient: (id: number) => void;
  updatePatient: (updatedPatient: PatientType) => void;
}

export default function PatientCard({
  patient,
  removePatient,
  updatePatient,
}: PatientCardProps) {
  console.log("🚀 ~ patient:", patient);

  const [isEdit, setIsEdit] = useState(false);

  const genders = ["Male", "Female"];
  const [selected, setSelected] = useState(patient.gender);

  useEffect(() => {

  }) 



  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9000/doctorsaccount/${patient.id}`, {
        withCredentials: true,
      });
      removePatient(patient.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const updatedPatientData = Object.fromEntries(formData.entries());
      const response = await axios.put(
        `http://localhost:9000/doctorsaccount/${patient.id}`,
        updatedPatientData,
        {
          withCredentials: true,
        }
      );
      updatePatient(response.data);
      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="flex justify-between gap-x-6 py-5">
      {isEdit ? (
        <form onSubmit={(e) => void handleSave(e)}>
          <div className="sm:col-span-4 mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent p-2  text-cyan-900 placeholder:text-cyan-900 focus:ring-0 sm:text-sm sm:leading-6"
                  defaultValue={patient.name}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="last_name"
                  id="lastname"
                  autoComplete="lastname"
                  className="block flex-1 border-0 bg-transparent p-2  text-cyan-900 placeholder:text-cyan-900 focus:ring-0 sm:text-sm sm:leading-6"
                  defaultValue={patient.last_name}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Age
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="age"
                  id="age"
                  autoComplete="age"
                  className="block flex-1 border-0 bg-transparent p-2  text-cyan-900 placeholder:text-cyan-900 focus:ring-0 sm:text-sm sm:leading-6"
                  defaultValue={patient.age}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mb-2">
            <Listbox value={selected} onChange={setSelected} name="gender">
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-cyan-900">
                    Gender
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-2 pl-3 pr-10 text-left text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-900 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{selected}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-cyan-900"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {genders.map((gender) => (
                          <Listbox.Option
                            key={gender}
                            className={({ active }) =>
                              `${
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-cyan-900"
                              } relative cursor-default select-none py-2 pl-3 pr-9`
                            }
                            value={gender}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={`${
                                      selected ? "font-semibold" : "font-normal"
                                    } ml-3 block truncate`}
                                  >
                                    {gender}
                                  </span>
                                </div>

                                {selected && (
                                  <span
                                    className={`${
                                      active ? "text-white" : "text-indigo-600"
                                    } absolute inset-y-0 right-0 flex items-center pr-4`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="col-span-full mb-2">
            <label
              htmlFor="health"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Health issues
            </label>
            <div className="mt-2">
              <textarea
                id="health"
                name="health_issues"
                rows={3}
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-cyan-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={patient.health_issues}
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="tests"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Test results
            </label>
            <div className="mt-2">
              <textarea
                id="tests"
                name="analyses_result"
                rows={3}
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-cyan-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={patient.analyses_result}
              />
            </div>
          </div>
          <div className="col-span-full mb-2">
            <label
              htmlFor="treatment"
              className="block text-sm font-medium leading-6 text-cyan-900"
            >
              Treatment plan
            </label>
            <div className="mt-2">
              <textarea
                id="treatment"
                name="treatment"
                rows={3}
                className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-cyan-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={patient.treatment}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-cyan-50 my-1"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="min-w-0 gap-x-4">
          <p className="text-lg font-semibold">
            {patient.name} {patient.last_name} 
          </p>
          <p className="text-sm text-cyan-900">Age: {patient.age}</p>
          <p className="text-sm text-cyan-900">Gender: {patient.gender}</p>
          <p className="text-sm text-cyan-900">
            Health Issues: {patient.health_issues}
          </p>
          <p className="text-sm text-cyan-900">
            Analysis Result: {patient.analyses_result}
          </p>
          <p className="text-sm text-cyan-900">
            Treatment: {patient.treatment}
          </p>
        </div>
      )}
      <div>
        <button
          onClick={() => handleDelete()}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-cyan-50 mx-1"
        >
          Delete
        </button>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-cyan-50 mx-1"
        >
          Edit
        </button>
      </div>
    </li>
  );
}
