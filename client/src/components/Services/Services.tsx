import { useParams, Link } from "react-router-dom";
import { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPageService } from "../../redux/thunks";

type Params = {
  name: string;
  id: string
};

const Services = () => {

  const { name } = useParams<Params>();
  const dispatch = useAppDispatch();
  const serv = useAppSelector((state) => state.servPage.service);
  const loading = useAppSelector((state) => state.servPage.isLoading);

  useEffect(() => {
    if (name) dispatch(fetchPageService(name));
  }, [name, dispatch]);

  if (loading || !serv)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  return (
    <div className="bg-white shadow rounded-lg p-8 my-8 mx-auto max-w-2xl ">
      <img src={serv.img} alt="img" />

      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{serv.name}</h1>
      <p className="mb-6">{serv.description}</p>
      <Link
        to={`/appointment/${name}`}
        className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Sign up for a consultation
      </Link>
      <ul>
        <li>
          Individual care for pediatric patients from birth to 18 years of age
        </li>
      </ul>
    </div>
  );
};

export default Services;
