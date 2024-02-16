import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../../redux/hooks";
import { fetchAddOrder } from "../../redux/thunks";
import { Params, useNavigate, useParams } from "react-router-dom";

type CalendarProps = {
  selectedDoctorId: string | null;
};
export default function Calendar({ selectedDoctorId }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { specialization } = useParams<Params>();
  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/clientsaccount");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      console.log("Date or time is not selected");
      return;
    }
    const formattedDate = selectedDate.toISOString().slice(0, 10);
    const orderData = {
      date: formattedDate,
      time: selectedTime,
      doctor_id: selectedDoctorId,
      service_id: 0,
      status: false,
      service_type: "",
      user_id: 0,
      specialization: specialization,
    };
    dispatch(
      fetchAddOrder({
        data: orderData,
        specialization: specialization,
      })
    ).then(() => {
      handleOpenModal();
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-6">
        Sign up for a consultation
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <div className="mb-6">
          <label
            htmlFor="appointment-date"
            className="block text-sm font-bold mb-2"
          >
            Choose date:
          </label>
          <DatePicker
            id="appointment-date"
            className="shadow appearance-none border rounded w-60 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Choose date"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="appointment-time"
            className="block text-sm font-bold mb-2"
          >
            Choose time:
          </label>
          <input
            id="appointment-time"
            type="time"
            className="shadow appearance-none border text-cyan-900 rounded w-60 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
      </form>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          id="my-modal"
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-cyan-900">
                      Success
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm">
                        Your appointment has been successfully scheduled!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  id="ok-btn"
                  onClick={handleCloseModal}
                  className="inline-flex w-1/4 justify-center rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 sm:ml-3 sm:w-auto"
                >
                  OK
                </button>

                {/* {isModalOpen && (
                  <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                    id="my-modal"
                  >
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                      <div className="mt-3 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Success
                        </h3>
                        <div className="mt-2 px-7 py-3">
                          <p className="text-sm text-gray-500">
                            Registration was successful
                          </p>
                        </div>
                        <div className="items-center px-4 py-3">
                          <button
                            id="ok-btn"
                            onClick={handleCloseModal}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            Go to your personal account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
