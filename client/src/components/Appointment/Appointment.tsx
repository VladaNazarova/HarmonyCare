import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchCheckUserSession } from "../../redux/thunks";

import Calendar from "../Calendar/Calendar";
import DoctorOnAppointment from "../DoctorOnAppoint/DoctorOnAppointment";

export default function Appointment(){
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
    <div className="flex container mx-auto py-8 ">
      <div className="flex-grow bg-white shadow-lg p-6 rounded-lg mr-2">
        
        <DoctorOnAppointment
          onSelectDoctor={handleSelectDoctor}
          selectedDoctorId={selectedDoctorId}
        />
      </div>
      <div className="block w-0.5 bg-blue-500 mx-2"></div>
      <div className="flex-grow bg-white shadow-lg p-6 rounded-lg ml-2">
      
        <Calendar selectedDoctorId={selectedDoctorId} />
      </div>
    </div>
  );
}
