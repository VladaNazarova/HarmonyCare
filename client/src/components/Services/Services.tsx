import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPageService } from "../../redux/thunks";

type Params = {
  id: string;
  specialization: string;
};

const Services = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();
  const serv = useAppSelector((state) => state.servPage.service);
  const specialist = useAppSelector((state) => state.servPage.specialist);
  const loading = useAppSelector((state) => state.servPage.isLoading);

  useEffect(() => {
    if (id) dispatch(fetchPageService(id));
  }, [id, dispatch]);
  if (loading || !serv) return <div>Loading...</div>;
  return (
    <div>
      <h1>{serv.name}</h1>
      <p>{serv.description}</p>
      {specialist && (
        <div>
          <h2>Specialist</h2>
          <p>{specialist.login}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
