import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";

export type Services = {
  id: number;
  name: string;
  description: string;
};

export default function Main(): JSX.Element {
  const [serv, setServ] = useState<Services[]>([]);

  useEffect(() => {
    axios
      .get<Services[]>("http://localhost:3000/services/")
      .then((response) => {
        setServ(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const nav = useNavigate();

  const servicePages = (id: number) => {
    nav(`/services/${id}`);
  };
  return (
    <div>
      <Slider />

      {!serv.length && <p>Данные отсутствуют</p>}
      {serv.map((se) => (
        <div
          key={se.id}
          className="border-4 p-4 border-purple-400 rounded-xl m-8 h-64 w-96"
        >
          <p className="text-xl text-center">{se.name}</p>

          <button onClick={() => servicePages(se.id)}>Подробнее</button>
        </div>
      ))}
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
