import './style.css';
import Layouts from '../../layouts/index';
import EventImage from '../../components/EventImage';
import EventInfo from '../../components/EventInfo';
import Button from '../../components/Button';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    
    axios.get("/src/data/data.json")
      .then(response => {
        const evento = response.data.events.find(evento => evento._id == id)
        console.log(evento);
        setEvento(evento);
      })
      .catch(error => {
        console.error("Error al obtener el evento:", error);
      });
  }, [id]);

  if (!evento) {
    return (
      <div>
        <Layouts>
          <div className="flex items-center justify-center my-10 mx-3">
            <h2 className='h2NoEvents'>No hay eventos...</h2>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
            </div>
          </div>
        </Layouts>
      </div>
    );
  }

  return (
    <Layouts>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <EventImage image={evento.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <EventInfo id={evento.id} name={evento.name} description={evento.description} price={evento.price} date={evento.date} place={evento.place} />
              <Button buttonName="Buy" />
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default Details;
