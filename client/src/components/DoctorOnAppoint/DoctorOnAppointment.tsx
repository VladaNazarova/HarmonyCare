import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDoctorsBySpecialization } from "../../redux/thunks";

type Params = {
  specialization: string;
};

export default function DoctorOnAppointment(): JSX.Element {
  const { specialization } = useParams<Params>();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const doctorsSpec = useAppSelector((state) => state.doctorSlice.doctors);

  useEffect(() => {
    if (specialization) {
      dispatch(fetchDoctorsBySpecialization(specialization));
    }
  }, [specialization, dispatch]);

  function handleChange(id: string) {
    setSelectedDoctorId(id === selectedDoctorId ? null : id);
  }

  return (
    <div className="w-full lg:w-6/6 pr-4">
      
      <h2 className="text-2xl font-bold mb-8 text-center">
        Doctors Specialized in: {specialization}
      </h2>
      <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[500px] scrollbar-thin">
        {doctorsSpec.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <img
                src={`http://localhost:3000/images/${doctor.img}`}
                alt="Doctor"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">{doctor.login}</p>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-sm">
                  {doctor.experience} years of experience
                </p>
              </div>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded"
                checked={selectedDoctorId === doctor.id.toString()}
                onChange={() => handleChange(doctor.id.toString())}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}