import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTakeOrder } from "../../redux/thunks";
import StripePayment from "../Payment/StripePayment";

export default function ClientCabinet() {
  const orders = useAppSelector((state) => state.order.orders);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTakeOrder());
  }, [dispatch]);

  const goBack = () => {
    navigate("/");
 
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <button
        onClick={goBack}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back
      </button>
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-lg shadow-lg p-6 mb-4
                     transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-lg text-gray-700 font-semibold mb-2">
            Appointment data: <span className="font-normal">{order.date}</span>
          </p>
          <p className="text-lg text-gray-700 font-semibold mb-2">
            Appointment time: <span className="font-normal">{order.time}</span>
          </p>
          <p className="text-lg text-gray-700 font-semibold mb-2">
            Service: <span className="font-normal">{order.service_type}</span>
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Doctor’s name:
            <span className="font-normal">
              
              {order.Doctor ? order.Doctor.login : "No doctor"}
            </span>
          </p>
          {order.status ? (
            <p className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white">
              Paid
            </p>
          ) : (
            <StripePayment order={order} />
          )}
        </div>
      ))}
    </div>
  );
}