import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Запись на прием к врачу с ID ${id} на дату ${selectedDate}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Sign up for a consultation
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
          <label
            htmlFor="appointment-date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose a convenient date:
          </label>
          <DatePicker
            id="appointment-date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Выберите дату"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Appointment;
