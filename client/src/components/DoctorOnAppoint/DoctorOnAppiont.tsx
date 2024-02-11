import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDoctorsBySpecialization } from "../../redux/thunks";

type Params = {
  specialization: string;
};

export default function DoctorOnAppoint(): JSX.Element {
  const { specialization } = useParams<Params>();
  const dispatch = useAppDispatch();
  const doctorsSpec  = useAppSelector((state) => state.doctorSlice.doctors);

  useEffect(() => {
    if (specialization) {
      dispatch(fetchDoctorsBySpecialization(specialization));
    }
  }, [specialization, dispatch]);

  return (
    <div>
      <h2>Doctors Specialized in: {specialization}</h2>
      <ul>
        {doctorsSpec.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
}
