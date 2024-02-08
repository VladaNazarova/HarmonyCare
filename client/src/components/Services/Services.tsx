import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPageService } from "../../redux/thunks";

type Params = {
  id: string
}

const Services = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();
  const serv = useAppSelector((state) => state.servPage.service);
  const loading = useAppSelector((state) => state.servPage.isLoading);

  useEffect(() => {
    if (id) dispatch(fetchPageService(id));
  }, [id, dispatch]);
  if (loading || !serv) return <div>Loading...</div>;
  return (
    <div>
      <h1>{serv.name}</h1>
      <p>{serv.description}</p>
    </div>
  );
};

export default Services;
