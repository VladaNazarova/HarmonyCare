import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = (props: Services) => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/services/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default Services;
