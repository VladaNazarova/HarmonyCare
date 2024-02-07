import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGetServices } from "../../redux/thunks";

export default function Main(): JSX.Element {
  const serv = useAppSelector((store) => store.serviceSlice.services);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchGetServices());
  }, [dispatch]);

  const nav = useNavigate();

  const servicePages = (id: number) => {
    nav(`/services/${id}`);
  };
return (
  <div>
    <Slider />

    {!serv.length && (
      <p className="text-center mt-5 text-lg">Данные отсутствуют</p>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {serv.map((se) => (
        <div
          key={se.id}
          className="flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4"
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-center mb-3">
              {se.name}
            </h2>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3">
            <button
              onClick={() => servicePages(se.id)}
              className="w-full text-white font-semibold"
            >
              more details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
{
  /* {selectedId === se.id && (
            <div>
              <p>{se.description}</p>
            </div>
          )} */
} // const handleClick = (id: number) => {
//   if (selectedId === id) {
//     setSelectedId(null);
//   } else {
//     setSelectedId(id);
//   }
// };
// const [selectedId, setSelectedId] = useState<number | null>(null);
