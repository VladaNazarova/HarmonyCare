import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchCheckUserSession } from "../../redux/thunks";
import DoctorOnAppointment from "../DoctorOnAppoint/DoctorOnAppointment";
import Calendar from "../Calendar/Calendar";

const Appointment = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCheckUserSession());
  }, [dispatch]);

  return (
    <div className="flex container mx-auto py-8 ">
      <div className="flex-grow bg-white shadow-lg p-6 rounded-lg mr-2">
        <DoctorOnAppointment />
      </div>
      <div className="block w-0.5 bg-blue-500 mx-2"></div>{" "}
      <div className="flex-grow bg-white shadow-lg p-6 rounded-lg ml-2">
        <Calendar />
      </div>
    </div>
  );
};

export default Appointment;
