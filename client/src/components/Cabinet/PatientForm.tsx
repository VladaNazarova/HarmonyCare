import {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import type { PatientType } from "../../types/types";

export default function PatientForm({
  onAddPatient,
  setOpenForm,
}: {
  onAddPatient: (newPatient: PatientType) => void;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const genders = ["Male", "Female"];
  const [selected, setSelected] = useState(genders[0]);

  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const data = Object.fromEntries(formData.entries());
      const response = await axios.post(
        "http://localhost:9000/doctorsaccount",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("🚀 ~ handleAdd ~ response:", response);
      onAddPatient(response.data);
      setOpen(false);
      setOpenForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-cyan-900"
                      >
                        Fill out patient registration form
                      </Dialog.Title>

                      <div className="mt-2">
                        <form onSubmit={(e) => void handleAdd(e)}>
                          <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-cyan-900"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block flex-1 border-0 bg-transparent p-2 text-cyan-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="John"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-cyan-900"
                                  >
                                    Last name
                                  </label>
                                  <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                        type="text"
                                        name="last_name"
                                        id="lastname"
                                        autoComplete="lastname"
                                        className="block flex-1 border-0 bg-transparent p-2 text-cyan-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Doe"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-cyan-900"
                                  >
                                    Age
                                  </label>
                                  <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                        type="text"
                                        name="age"
                                        id="age"
                                        autoComplete="age"
                                        className="block flex-1 border-0 bg-transparent p-2 text-cyan-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="18"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <Listbox
                                    value={selected}
                                    onChange={setSelected}
                                    name="gender"
                                  >
                                    {({ open }) => (
                                      <>
                                        <Listbox.Label className="block text-sm font-medium leading-6 text-cyan-900">
                                          Gender
                                        </Listbox.Label>
                                        <div className="relative mt-2">
                                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-2 pr-2 text-left text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span className="flex items-center">
                                              <span className="ml-3 block truncate">
                                                {selected}
                                              </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                              <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
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
                                                        ? "bg-cyan-100"
                                                        : "text-cyan-900"
                                                    } relative cursor-default select-none p-2`
                                                  }
                                                  value={gender}
                                                >
                                                  {({ selected, active }) => (
                                                    <>
                                                      <div className="flex items-center">
                                                        <span
                                                          className={`${
                                                            selected
                                                              ? "font-semibold"
                                                              : "font-normal"
                                                          } ml-3 block truncate`}
                                                        >
                                                          {gender}
                                                        </span>
                                                      </div>

                                                      {selected && (
                                                        <span
                                                          className={`${
                                                            active
                                                              ? "text-white"
                                                              : "text-cyan-900"
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
                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-cyan-900"
                                  >
                                    Email address
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
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
                                      className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      defaultValue={""}
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
                                      className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
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
                                      className="block w-full rounded-md border-0 p-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                              className="text-sm font-semibold leading-6 text-cyan-900"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              onClick={() => setOpen(false)}
                              className="rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
