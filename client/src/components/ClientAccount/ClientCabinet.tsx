import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTakeOrder } from "../../redux/thunks";
import StripePayment from "../Payment/StripePayment";

export default function ClientCabinet() {
  const orders = useAppSelector((state) => state.order.orders);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTakeOrder());
  }, [dispatch]);

  // const goBack = () => {
  //   navigate("/");
  // };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-2 bg-white rounded-lg shadow-lg p-6 mb-4

                     transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-lg font-semibold mb-2">
              Appointment data:{" "}
              <span className="font-normal">{order.date}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Appointment time:{" "}
              <span className="font-normal">{order.time}</span>
            </p>
            <p className="text-lg font-semibold">
              Doctors name:{" "}
              <span className="font-normal">{order.doctor_id}</span>
            </p>
            <>
              <StripePayment />
            </>
          </div>
        ))}
      </div>
      {/* <div className="flex">
        <button
          onClick={goBack}
          className="mb-4 bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded items-center justify-center"
        >
          Go back
        </button>
      </div> */}
    </>
  );
}
