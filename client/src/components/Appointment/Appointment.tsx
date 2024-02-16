import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchCheckUserSession } from "../../redux/thunks";

import Calendar from "../Calendar/Calendar";
import DoctorOnAppointment from "../DoctorOnAppoint/DoctorOnAppointment";

export default function Appointment() {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCheckUserSession());
  }, [dispatch]);

  const handleSelectDoctor = (id: string | null) => {

    console.log(id, "handleSelectDoctor Выше");

    setSelectedDoctorId(id);
  };

  console.log(selectedDoctorId, "selectedDoctorId Выше");

  return (
    <div className="flex justify-center items-center gap-4 p-6 m-6 my-8 mb-0" style={{height: "500px"}}>
      <div>
        <DoctorOnAppointment
          onSelectDoctor={handleSelectDoctor}
          selectedDoctorId={selectedDoctorId}
        />
      </div>
      <div>
        <Calendar selectedDoctorId={selectedDoctorId} />
      </div>
    </div>
  );
}
