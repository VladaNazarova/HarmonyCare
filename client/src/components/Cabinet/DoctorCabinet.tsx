import { useEffect, useState } from "react";
import axios from "axios";
import type { UserType } from "../../types/types";
import type { PatientType } from "../../types/types";
import PatientForm from "./PatientForm";
import PatientCard from "./PatientCard";

export default function DoctorCabinet() {
  const [userData, setUserData] = useState<UserType | null>(null);
  const [patientData, setPatientData] = useState<PatientType[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:9000/doctorsaccount", {
        withCredentials: true,
      })
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get("http://localhost:9000/doctorsaccount", {
        withCredentials: true,
      })
      .then((response) => {
        setPatientData(response.data.patient);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  const addPatient = (newPatient: PatientType) => {
    setPatientData((prevPatientData) => [...prevPatientData, newPatient]);
  };

  const removePatient = (id: number) => {
    setPatientData((prevPatientData) =>
      prevPatientData.filter((patient) => patient.id !== id)
    );
  };

  const updatePatient = (updatedPatient: PatientType) => {
    setPatientData((prevPatientData) =>
      prevPatientData.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  return (
    <div className="mx-auto max-w-5xl my-16">
      <div className="lg:flex lg:items-center lg:justify-between my-16 pt-12">
        {userData && (
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-cyan-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {userData.specialization} {userData.login}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-cyan-900">
                {userData.experience} years of experience
              </div>
              <div className="mt-2 flex items-center text-sm text-cyan-900">
                {userData.email}
              </div>
              <div className="mt-2 flex items-center text-sm text-cyan-900">
                {userData.phone_number}
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="hidden sm:block">
            {openForm ? (
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-50"
              >
                Add patient
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setOpenForm(true)}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-50"
              >
                Add patient
              </button>
            )}
          </span>
        </div>

        {openForm && (
          <PatientForm onAddPatient={addPatient} setOpenForm={setOpenForm} />
        )}
      </div>

      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Patients
      </h2>
      <ul role="list" className="divide-y divide-gray-100">
        {patientData.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            removePatient={removePatient}
            updatePatient={updatePatient}
          />
        ))}
      </ul>
    </div>
  );
}
