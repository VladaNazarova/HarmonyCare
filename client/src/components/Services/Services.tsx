import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPageService } from "../../redux/thunks";
import "./Services.css";
import { Link, useParams } from "react-router-dom";

type Params = {
  name: string;
  id: string;
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
    <div className="bg-white rounded-lg p-8 my-8 mx-auto max-w-2xl ">
      <img src={serv.img} alt="img" className="service-img"/>

      <h1 className="text-3xl font-semibold text-gray-800 my-4">{serv.name}</h1>
      <p className="mb-6">{serv.description}</p>
      <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
        <p className="font-semibold">Consultation Price: {serv.price}</p>
      </div>
      <Link
        to={`/appointment/${name}`}
        className="inline-block bg-cyan-900 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700 transition-colors"
      >
        Sign up for a consultation
      </Link>

      <p className="my-4">
        Individual care for pediatric patients from birth to 18 years of age
      </p>
    </div>
  );
};

export default Services;