import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDoctorsBySpecialization } from "../../redux/thunks";

type Params = {
  specialization: string;
};

export default function DoctorOnAppointment(): JSX.Element {
  const { specialization } = useParams<Params>();
  const dispatch = useAppDispatch();
  const doctorsSpec = useAppSelector((state) => state.doctorSlice.doctors);
  console.log(specialization);
  console.log("Привет");

  useEffect(() => {
    if (specialization) {
      console.log(specialization);

      dispatch(fetchDoctorsBySpecialization(specialization));
    }
  }, [specialization, dispatch]);

return (
  <div className="w-full lg:w-2/6 pr-4">
    <h2 className="text-2xl font-bold mb-8 text-center">
      Doctors Specialized in: {specialization}
    </h2>
    <div className="grid grid-cols-1 gap-4">
      {doctorsSpec.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg p-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <img
              src={`http://localhost:3000/images/${doctor.img}`}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">{doctor.login}</p>
              <p className="text-sm text-gray-600">{doctor.specialization}</p>
              <p className="text-sm">{doctor.experience} years of experience</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}