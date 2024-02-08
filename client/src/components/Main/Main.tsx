
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGetServices } from "../../redux/thunks";
import styles from "./Main.module.scss";
import GreatingBar from "../GreatingBar/GreatingBar";

export default function Main(): JSX.Element {
  const serv = useAppSelector((store) => store.serviceSlice.services);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetServices());
  }, [dispatch]);

  const navigate = useNavigate();

  const goToServicePage = (id: number) => {
    navigate(`/services/${id}`);
  };

  return (
    <div>
      <GreatingBar />
      <Slider />
      <div className={styles.mostVServ}>Most visited services:</div>
      {!serv.length && (
        <p className="text-center mt-5 text-lg">Data not available</p>
      )}
      <div className={styles.cardsBlock}>
        {serv.map((se) => (
          <div
            key={se.id}
            className={`${styles.key} cursor-pointer`}
            onClick={() => goToServicePage(se.id)}
          >
            <div className={styles.headText}>
              <h2 className={styles.seName}>{se.name}</h2>
            </div>
            <div className={styles.promo}>
              <h2 className={styles.promoText}>{se.promo}</h2>
            </div>
            <img src={se.logo} alt={se.name} className="max-w-xs mx-auto" />
            <div className={styles.divButton}>
              <button className={styles.buttonText}>more details</button>
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
