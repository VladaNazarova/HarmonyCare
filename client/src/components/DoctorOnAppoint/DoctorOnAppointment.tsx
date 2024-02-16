import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDoctorsBySpecialization } from "../../redux/thunks";

type Params = {
  specialization: string;
};

type DoctorOnAppointmentProps = {
  onSelectDoctor: (id: string | null) => void;
  selectedDoctorId: string | null;
};

export default function DoctorOnAppointment({
  onSelectDoctor,
  selectedDoctorId,
}: DoctorOnAppointmentProps): JSX.Element {
  const { specialization } = useParams<Params>();
  const dispatch = useAppDispatch();
  const doctorsSpec = useAppSelector((state) => state.doctorSlice.doctors);

  useEffect(() => {
    if (specialization) {
      dispatch(fetchDoctorsBySpecialization(specialization));
    }
  }, [specialization, dispatch]);

  function handleChange(doctor_id: string) {
    onSelectDoctor(doctor_id === selectedDoctorId ? null : doctor_id);
  }
  return (
    <div className="flex flex-col items-center justify-items-start gap-20" style={{height: "311px"}}>
      <h2 className="text-4xl font-semibold text-center">
        Doctors specialized in: {specialization}
      </h2>
      <div className="overflow-y-auto max-h-[311px] scrollbar-thin">
        {doctorsSpec.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg overflow-hidden p-4 flex justify-center items-center"
          >
            <div className="flex items-center space-x-4">
              <img
                src={`http://localhost:9000/images/${doctor.img}`}
                alt="Doctor"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">{doctor.login}</p>
                <p className="text-sm">{doctor.specialization}</p>
                <p className="text-sm">
                  {doctor.experience} years of experience
                </p>
              </div>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-cyan-900 rounded"
                checked={selectedDoctorId === doctor.doctor_id.toString()}
                onChange={() => handleChange(doctor.doctor_id.toString())}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
