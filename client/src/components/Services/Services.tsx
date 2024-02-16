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
    <div className="flex p-12 mx-12 justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold mb-4">{serv.name}</h1>
        <p className="mb-6">{serv.description}</p>
        <Link
          to={`/appointment/${name}`}
          className="text-white font-bold py-2 px-4 rounded btn"
        >
          Sign up for a consultation
        </Link>
        <p>
          Individual care for pediatric patients from birth to 18 years of age
        </p>
      </div>
      <div>
        <img src={serv.img} alt="img" className="service-img" />
      </div>
    </div>
  );
};

export default Services;