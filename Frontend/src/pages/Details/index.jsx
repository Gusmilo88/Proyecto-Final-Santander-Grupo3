// Details.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layouts from '../../layouts/index';
import Detalles from '../../components/Detalles';
import CarouselDetails from '../../components/CarouselDetails';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/src/data/data.json')
      .then((response) => {
        const evento = response.data.events.find((evento) => evento._id == id);
        console.log('Evento seleccionado:', evento);
        setEvento(evento);
        setEventos(response.data.events);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el evento:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <Layouts>
          <div className="flex items-center justify-center my-10 mx-3">
            <h2 className="h2NoEvents">Cargando...</h2>
          </div>
        </Layouts>
      </div>
    );
  }

  if (!evento) {
    return (
      <div>
        <Layouts>
          <div className="flex items-center justify-center my-10 mx-3">
            <h2 className="h2NoEvents">No hay eventos...</h2>
          </div>
        </Layouts>
      </div>
    );
  }

  return (
    
    <Layouts>
      <div>
      <Detalles evento={evento} />
      {eventos.length > 0 && <CarouselDetails events={eventos} currentEvent={evento} />}
      </div>
    </Layouts>
  );
}

export default Details;
